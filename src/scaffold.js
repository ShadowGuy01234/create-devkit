// src/scaffold.js
import fs from "fs-extra";
import path from "path";
import ora from "ora";
import chalk from "chalk";
import { runPostInstall } from "./postinstall.js";

/**
 * Main scaffold function. Copies a template to the target directory,
 * replaces {{PROJECT_NAME}} tokens, and renames _gitignore → .gitignore.
 *
 * @param {{
 *   projectName: string,
 *   templateKey: string,
 *   tmpl: object,
 *   initGit: boolean,
 *   installDeps: boolean
 * }} config
 */
export async function scaffold(config) {
  const { projectName, tmpl, initGit, installDeps } = config;
  const target = path.resolve(process.cwd(), projectName);

  if (await fs.pathExists(target)) {
    console.error(
      chalk.red(
        `\n  Error: "${projectName}" already exists in this directory.\n`,
      ),
    );
    process.exit(1);
  }

  const spinner = ora({
    text: `Scaffolding ${tmpl.label}…`,
    color: "cyan",
  }).start();

  try {
    await fs.copy(tmpl.dir, target, { errorOnExist: true });
    await replaceTokens(target, projectName);
    await renameGitignores(target);
    spinner.succeed(chalk.green(`Created ${chalk.bold(projectName)}`));
  } catch (err) {
    spinner.fail("Scaffolding failed.");
    await fs.remove(target).catch(() => {}); // clean up partial output
    console.error(chalk.red(`\n  ${err.message}\n`));
    process.exit(1);
  }

  await runPostInstall({ target, initGit, installDeps, tmpl });
}

/**
 * Replaces {{PROJECT_NAME}} in key files inside the scaffolded directory.
 * Only processes text files that are likely to contain the token.
 */
async function replaceTokens(dir, projectName) {
  const targets = [
    "package.json",
    "README.md",
    "pyproject.toml",
    "client/package.json",
    "server/package.json",
    "frontend/package.json",
    "backend/pyproject.toml",
  ];

  for (const rel of targets) {
    const abs = path.join(dir, rel);
    if (!(await fs.pathExists(abs))) continue;
    const original = await fs.readFile(abs, "utf8");
    const patched = original.replaceAll("{{PROJECT_NAME}}", projectName);
    if (patched !== original) {
      await fs.writeFile(abs, patched, "utf8");
    }
  }
}

/**
 * Recursively renames _gitignore → .gitignore throughout the target.
 * npm silently strips .gitignore files on publish, so templates store them
 * as _gitignore and we rename at scaffold time.
 */
async function renameGitignores(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await renameGitignores(abs);
    } else if (entry.name === "_gitignore") {
      await fs.rename(abs, path.join(dir, ".gitignore"));
    }
  }
}
