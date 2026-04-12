// src/postinstall.js
import { execSync } from 'child_process';
import path from 'path';
import ora from 'ora';
import chalk from 'chalk';

/**
 * Runs post-scaffold operations: git init, optional npm install, and prints
 * the success message with next steps.
 *
 * @param {{ target: string, initGit: boolean, installDeps: boolean, tmpl: object }} opts
 */
export async function runPostInstall({ target, initGit, installDeps, tmpl }) {
  if (initGit) {
    const spinner = ora('Initialising git…').start();
    try {
      execSync('git init', { cwd: target, stdio: 'ignore' });
      execSync('git add -A', { cwd: target, stdio: 'ignore' });
      execSync('git commit -m "chore: initial scaffold from create-devkit"', {
        cwd: target,
        stdio: 'ignore',
        env: { ...process.env, GIT_AUTHOR_NAME: 'create-devkit', GIT_AUTHOR_EMAIL: '' },
      });
      spinner.succeed('Git initialised');
    } catch {
      spinner.warn('Git init skipped (git not found or not configured)');
    }
  }

  if (installDeps) {
    const spinner = ora('Installing dependencies…').start();
    try {
      execSync('npm install', { cwd: target, stdio: 'inherit' });
      spinner.succeed('Dependencies installed');
    } catch {
      spinner.fail('npm install failed — run it manually');
    }
  }

  printSuccess(path.basename(target), tmpl);
}

function printSuccess(projectName, tmpl) {
  const box = (s) => `  ${s}`;
  console.log('');
  console.log(chalk.bold.green('  Done! Your project is ready.\n'));
  console.log(box(chalk.bold('Next steps:')));
  console.log('');
  console.log(box(chalk.cyan(`cd ${projectName}`)));
  tmpl.postSteps.forEach((step) => console.log(box(chalk.cyan(step))));
  console.log('');
  console.log(box(chalk.dim('Happy building — create-devkit')));
  console.log('');
}
