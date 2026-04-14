// src/scaffold.js
import fs from "fs-extra";
import path from "path";
import ora from "ora";
import chalk from "chalk";
import { runPostInstall } from "./postinstall.js";

const DEFAULT_ROOT_GITIGNORE = `# Dependencies
node_modules/

# Build outputs
dist/
build/
coverage/
.next/
.angular/
*.tsbuildinfo

# Environment and local overrides
.env
.env.*
!.env.example

# Python virtual environments and caches
venv/
.venv/
__pycache__/
*.pyc

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# OS and editor files
.DS_Store
.vscode/
!.vscode/extensions.json
.idea/
`;

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
    await ensureRootGitignore(target);
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

/**
 * Ensures scaffolded projects always contain a root .gitignore.
 * This protects against accidental template omissions of root _gitignore.
 */
async function ensureRootGitignore(dir) {
  const rootGitignore = path.join(dir, ".gitignore");
  if (await fs.pathExists(rootGitignore)) return;

  await fs.writeFile(rootGitignore, DEFAULT_ROOT_GITIGNORE, "utf8");
}
