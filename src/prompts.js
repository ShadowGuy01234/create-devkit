// src/prompts.js
import inquirer from "inquirer";
import chalk from "chalk";
import { listStacks, getTemplate } from "./registry.js";
import { resolveTemplateKey } from "./resolver.js";
import { scaffold } from "./scaffold.js";

const NAME_PATTERN = /^[a-z0-9][a-z0-9-]*[a-z0-9]$|^[a-z0-9]$/;

// nextjs-prisma-ts already includes Tailwind
const TAILWIND_SUPPORTED = [
  "mern",
  "mern-ts",
  "fastapi-react",
  "fastapi-react-ts",
  "angular-node",
];

/**
 * Runs the interactive wizard and hands off to scaffold.
 *
 * @param {{ projectName?: string, template?: string, git?: boolean, install?: boolean }} opts
 */
export async function runWizard({
  projectName,
  template,
  git = true,
  install = true,
}) {
  console.log("\n" + chalk.bold.hex("#646cff")("  create-devkit") + "\n");

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Project name:",
      default: "my-app",
      when: () => !projectName,
      validate: (v) =>
        NAME_PATTERN.test(v) ||
        "Lowercase letters, numbers and hyphens only. Must start and end with a letter or number.",
    },
    {
      type: "list",
      name: "stack",
      message: "Choose a stack:",
      when: () => !template,
      choices: listStacks(),
    },
    {
      type: "confirm",
      name: "tailwind",
      message: "Add Tailwind CSS?",
      default: false,
      when: (prev) => !template && TAILWIND_SUPPORTED.includes(prev.stack),
    },
    {
      type: "confirm",
      name: "initGit",
      message: "Initialise a git repository?",
      default: true,
      when: () => git !== false,
    },
    {
      type: "confirm",
      name: "installDeps",
      message: "Run npm install now?",
      default: false,
      when: () => install !== false,
    },
  ]);

  const resolvedKey = template
    ? template
    : resolveTemplateKey(answers.stack, {
        tailwind: answers.tailwind ?? false,
      });

  const tmpl = getTemplate(resolvedKey);

  await scaffold({
    projectName: projectName || answers.projectName,
    templateKey: resolvedKey,
    tmpl,
    initGit: answers.initGit ?? (git === false ? false : true),
    installDeps: answers.installDeps ?? false,
  });
}
