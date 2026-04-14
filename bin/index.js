#!/usr/bin/env node

import { program } from "commander";
import { runWizard } from "../src/prompts.js";

program
  .name("create-devkit")
  .description("Scaffold a full-stack project in seconds")
  .version("0.1.0")
  .argument("[project-name]", "Directory name for your new project")
  .option("-t, --template <name>", "Skip the menu and use a template directly")
  .option("--no-git", "Skip git initialisation")
  .option("--no-install", "Skip the npm install prompt")
  .action(async (projectName, options) => {
    try {
      await runWizard({
        projectName,
        template: options.template,
        git: options.git,
        install: options.install,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error(`\n  Error: ${message}\n`);
      process.exit(1);
    }
  });

program.parseAsync();
