// src/postinstall.js
import { execSync } from "child_process";
import path from "path";
import fs from "fs-extra";
import ora from "ora";
import chalk from "chalk";

/**
 * Runs post-scaffold operations: git init, optional npm install, and prints
 * the success message with next steps.
 *
 * @param {{ target: string, initGit: boolean, installDeps: boolean, tmpl: object }} opts
 */
export async function runPostInstall({ target, initGit, installDeps, tmpl }) {
  if (initGit) {
    const spinner = ora("Initialising git…").start();
    try {
      execSync("git init", { cwd: target, stdio: "ignore" });
      execSync("git add -A", { cwd: target, stdio: "ignore" });
      execSync('git commit -m "chore: initial scaffold from create-devkit"', {
        cwd: target,
        stdio: "ignore",
        env: {
          ...process.env,
          GIT_AUTHOR_NAME: "create-devkit",
          GIT_AUTHOR_EMAIL: "",
        },
      });
      spinner.succeed("Git initialised");
    } catch {
      spinner.warn("Git init skipped (git not found or not configured)");
    }
  }

  if (installDeps) {
    const installTargets = await findInstallTargets(target);

    if (installTargets.length === 0) {
      ora().warn("No package.json found — skipped npm install");
    }

    for (const installTarget of installTargets) {
      const relativeTarget = path.relative(target, installTarget) || ".";
      const locationText =
        relativeTarget === "." ? "project root" : relativeTarget;
      const spinner = ora(
        `Installing dependencies in ${locationText}…`,
      ).start();
      try {
        execSync("npm install", { cwd: installTarget, stdio: "inherit" });
        spinner.succeed(`Dependencies installed in ${locationText}`);
      } catch {
        spinner.fail(`npm install failed in ${locationText} — run it manually`);
      }
    }
  }

  printSuccess(path.basename(target), tmpl);
}

async function findInstallTargets(rootDir) {
  const targets = [];
  await collectInstallTargets(rootDir, rootDir, targets);

  // Prefer root first, then stable alphabetical order for nested apps.
  return targets.sort((a, b) => {
    if (a === rootDir) return -1;
    if (b === rootDir) return 1;

    const relA = path.relative(rootDir, a);
    const relB = path.relative(rootDir, b);
    return relA.localeCompare(relB);
  });
}

async function collectInstallTargets(rootDir, currentDir, targets) {
  if (await fs.pathExists(path.join(currentDir, "package.json"))) {
    targets.push(currentDir);
  }

  const entries = await fs.readdir(currentDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === "node_modules" || entry.name === ".git") continue;

    await collectInstallTargets(
      rootDir,
      path.join(currentDir, entry.name),
      targets,
    );
  }
}

function printSuccess(projectName, tmpl) {
  const box = (s) => `  ${s}`;
  console.log("");
  console.log(chalk.bold.green("  Done! Your project is ready.\n"));
  console.log(box(chalk.bold("Next steps:")));
  console.log("");
  console.log(box(chalk.cyan(`cd ${projectName}`)));
  tmpl.postSteps.forEach((step) => console.log(box(chalk.cyan(step))));
  console.log("");
  console.log(box(chalk.dim("Happy building — create-devkit")));
  console.log("");
}
