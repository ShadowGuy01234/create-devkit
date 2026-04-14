<div align="center">

<img src=".github/logo.png" alt="create-devkit" width="390" />

# create-devkit

**Scaffold a production-ready full-stack project in seconds.**

[![npm version](https://img.shields.io/npm/v/create-devkit?color=646cff&labelColor=1a1a1a)](https://www.npmjs.com/package/create-devkit)
[![npm downloads](https://img.shields.io/npm/dm/create-devkit?color=646cff&labelColor=1a1a1a)](https://www.npmjs.com/package/create-devkit)
[![license](https://img.shields.io/npm/l/create-devkit?color=646cff&labelColor=1a1a1a)](./package.json)
[![node](https://img.shields.io/node/v/create-devkit?color=646cff&labelColor=1a1a1a)](https://nodejs.org)

[Getting Started](#getting-started) · [Templates](#templates) · [Options](#options) · [Contributing](#contributing)

</div>

---

## Getting Started

No installation required. Run it directly with `npx`:

```bash
npx create-devkit@latest
```

Or pass a project name to skip the first prompt:

```bash
npx create-devkit@latest my-app
```

The interactive wizard will guide you through the rest.

---

## Templates

| Stack            | Template Keys                                                                  | Includes                                                               |
| ---------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| MERN             | `mern`, `mern-tw`, `mern-ts`, `mern-ts-tw`                                     | MongoDB + Express + React + Node (JS/TS, optional Tailwind variants)   |
| FastAPI + React  | `fastapi-react`, `fastapi-react-tw`, `fastapi-react-ts`, `fastapi-react-ts-tw` | FastAPI backend + React frontend (JS/TS, optional Tailwind variants)   |
| Next.js + Prisma | `nextjs-prisma-ts`                                                             | Next.js App Router + Prisma (TypeScript, Tailwind included by default) |
| Angular + Node   | `angular-node`, `angular-node-tw`                                              | Angular frontend + Express backend (optional Tailwind variant)         |

---

## Options

All prompts can be bypassed with flags for scripted or CI use.

```bash
npx create-devkit@latest <project-name> [options]
```

| Flag                | Description                                   |
| ------------------- | --------------------------------------------- |
| `--template <name>` | Skip the menu and use a template key directly |
| `--no-git`          | Skip git initialisation                       |
| `--no-install`      | Skip the npm install prompt                   |

**Valid `--template` keys:**

`mern`, `mern-tw`, `mern-ts`, `mern-ts-tw`, `fastapi-react`, `fastapi-react-tw`, `fastapi-react-ts`, `fastapi-react-ts-tw`, `nextjs-prisma-ts`, `angular-node`, `angular-node-tw`

---

## What you get

Every scaffolded project includes:

- A complete stack-specific folder structure (frontend/backend or fullstack app, depending on template)
- Ready-to-run starter code with stack-appropriate scripts and dev workflow commands
- `{{PROJECT_NAME}}` token replacement in relevant project metadata files
- Automatic `_gitignore` to `.gitignore` restoration during scaffold copy
- Optional git repository initialization
- Optional dependency installation prompt right after scaffolding

---

## Requirements

- Node.js `>=18.0.0`
- npm `>=7.0.0`

---

## Acknowledgements

React frontend templates in this project are based on
[create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite),
MIT licensed. Copyright (c) 2019-present Yuxi (Evan) You and Vite contributors.

Next.js template in this project is based on
[create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app),
MIT licensed. Copyright (c) 2024 Vercel, Inc.

---

## Contributing

Contributions are welcome. Open an issue or pull request if you want to improve templates, docs, or CLI workflows.

---

## License

MIT — see `package.json` for details.
