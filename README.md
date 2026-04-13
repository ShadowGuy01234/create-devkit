# create-devkit

Scaffold full-stack starter projects in seconds via `npx`.

`create-devkit` generates opinionated, ready-to-run project structures for popular frontend and full-stack combinations, with optional language variants and post-setup guidance.

## Why create-devkit

- Interactive onboarding for new projects with sensible defaults.
- Non-interactive flags for automation and quick bootstrap workflows.
- Multiple stack templates with consistent token replacement and `.gitignore` handling.
- Optional git initialization and dependency installation prompts.

## Stack Support

| Stack             | Description                             | Language variants |
| ----------------- | --------------------------------------- | ----------------- |
| MERN              | MongoDB + Express + React + Node        | `js`, `ts`        |
| FastAPI + React   | Python FastAPI backend + React frontend | `js`, `ts`        |
| Next.js + Prisma  | Next.js App Router + Prisma             | `ts`              |
| Angular + Node.js | Angular frontend + Express backend      | `ts`              |

### Language defaults

- `mern` and `fastapi-react` default to `js`.
- `angular-node` and `nextjs-prisma` default to `ts`.
- `--lang` accepts `js`, `ts`, `javascript`, and `typescript`.

## Quick Start

### Interactive mode

```bash
npx create-devkit
```

### Non-interactive mode

```bash
npx create-devkit my-app --template mern --lang ts
```

## CLI Usage

```bash
create-devkit [project-name] [options]
```

| Option                  | Description                                        |
| ----------------------- | -------------------------------------------------- |
| `-t, --template <name>` | Skip the template menu and use a template directly |
| `-l, --lang <language>` | Choose template language variant (`js` or `ts`)    |
| `--no-git`              | Skip git initialization                            |
| `--no-install`          | Skip npm install prompt                            |
| `-V, --version`         | Print CLI version                                  |
| `-h, --help`            | Show help                                          |

## Common Examples

```bash
# MERN (default: js)
npx create-devkit my-mern --template mern

# MERN TypeScript
npx create-devkit my-mern-ts --template mern --lang ts

# FastAPI + React TypeScript frontend
npx create-devkit my-fastapi --template fastapi-react --lang ts

# Next.js + Prisma (TS-only)
npx create-devkit my-next --template nextjs-prisma

# Skip git and install prompts (CI/script friendly)
npx create-devkit my-app --template mern --no-git --no-install
```

## What create-devkit handles

- Copies template files into your target directory.
- Replaces `{{PROJECT_NAME}}` tokens in template metadata files.
- Renames template `_gitignore` files to `.gitignore` in scaffolded output.
- Optionally initializes git and optionally runs dependency installation.

## Requirements

- Node.js `>=18.0.0`
- npm `>=9` recommended

## Local Development

```bash
git clone <your-repo-url>
cd create-devkit
npm install
node bin/index.js --help
```

## Publishing Checklist

- Confirm `npm publish --dry-run` succeeds.
- Ensure template folders contain no `node_modules`, lockfiles, or build artifacts.
- Ensure template `_gitignore` files are present in the package and scaffold to `.gitignore`.

## Acknowledgements

React frontend templates in this project are based on
[create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite),
MIT licensed. Copyright (c) 2019-present Yuxi (Evan) You and Vite contributors.

Next.js template in this project is based on
[create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app),
MIT licensed. Copyright (c) 2024 Vercel, Inc.

## License

MIT
