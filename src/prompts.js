// src/prompts.js
import inquirer from "inquirer";
import chalk from "chalk";
import {
  getDefaultTemplateLanguage,
  getTemplate,
  getTemplateLanguages,
} from "./registry.js";
import { scaffold } from "./scaffold.js";

const NAME_PATTERN = /^[a-z0-9][a-z0-9-]*[a-z0-9]$|^[a-z0-9]$/;

function normalizeLanguage(language) {
  if (!language) return undefined;
  const value = String(language).trim().toLowerCase();
  if (value === "javascript") return "js";
  if (value === "typescript") return "ts";
  return value;
}

function languageLabel(language) {
  return language === "ts" ? "TypeScript (ts)" : "JavaScript (js)";
}

/**
 * Runs the interactive wizard, collecting project configuration from the user
 * and handing off to the scaffold engine.
 *
 * @param {{ projectName?: string, template?: string, language?: string, git?: boolean, install?: boolean }} opts
 */
export async function runWizard({
  projectName,
  template,
  language,
  git = true,
  install = true,
}) {
  console.log("\n" + chalk.bold.hex("#646cff")("  create-devkit") + "\n");
  const normalizedLanguage = normalizeLanguage(language);

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Project name:",
      default: "my-app",
      when: () => !projectName,
      validate: (v) =>
        NAME_PATTERN.test(v) ||
        "Use lowercase letters, numbers and hyphens. Must start and end with a letter or number.",
    },
    {
      type: "list",
      name: "template",
      message: "Choose a stack:",
      when: () => !template,
      choices: [
        {
          name: "MERN          — MongoDB · Express · React · Node",
          value: "mern",
        },
        { name: "FastAPI + React", value: "fastapi-react" },
        { name: "Next.js + Prisma", value: "nextjs-prisma" },
        { name: "Angular + Node.js", value: "angular-node" },
        { name: "SvelteKit", value: "sveltekit" },
      ],
    },
    {
      type: "list",
      name: "language",
      message: "Choose template language:",
      when: (currentAnswers) => {
        if (normalizedLanguage) return false;
        const selectedTemplate = template || currentAnswers.template;
        return getTemplateLanguages(selectedTemplate).length > 1;
      },
      choices: (currentAnswers) => {
        const selectedTemplate = template || currentAnswers.template;
        return getTemplateLanguages(selectedTemplate).map((lang) => ({
          name: languageLabel(lang),
          value: lang,
        }));
      },
      default: (currentAnswers) => {
        const selectedTemplate = template || currentAnswers.template;
        return getDefaultTemplateLanguage(selectedTemplate);
      },
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

  // Validate template + language, whether passed via flags or prompts
  const resolvedTemplate = template || answers.template;
  const resolvedLanguage =
    normalizedLanguage ||
    answers.language ||
    getDefaultTemplateLanguage(resolvedTemplate);
  const resolvedTemplateConfig = getTemplate(
    resolvedTemplate,
    resolvedLanguage,
  );

  await scaffold({
    projectName: projectName || answers.projectName,
    template: resolvedTemplate,
    language: resolvedTemplateConfig.language,
    initGit: answers.initGit ?? (git === false ? false : true),
    installDeps: answers.installDeps ?? false,
  });
}
