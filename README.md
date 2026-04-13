# create-devkit

Scaffold full-stack projects interactively via `npx`.

```bash
npx create-devkit
```

## Available Stacks

| Stack                 | Description                             | Language variants |
| --------------------- | --------------------------------------- | ----------------- |
| **MERN**              | MongoDB · Express · React · Node        | `js`, `ts`        |
| **FastAPI + React**   | Python FastAPI backend + React frontend | `js`, `ts`        |
| **Next.js + Prisma**  | Next.js with Prisma ORM and SQLite      | `js`, `ts`        |
| **Angular + Node.js** | Angular frontend + Express backend      | `ts`              |
| **SvelteKit**         | SvelteKit application                   | `js`, `ts`        |

## Usage

### Interactive mode

```bash
npx create-devkit
```

### Quick mode

```bash
npx create-devkit my-app --template mern
```

### Quick mode with language

```bash
npx create-devkit my-app --template mern --lang ts
```

### CLI Flags

| Flag                    | Description                               |
| ----------------------- | ----------------------------------------- |
| `-t, --template <name>` | Skip the menu and use a template directly |
| `-l, --lang <language>` | Select language variant: `js` or `ts`     |
| `--no-git`              | Skip git initialisation                   |
| `--no-install`          | Skip the npm install prompt               |

## Language Defaults

- `mern`, `fastapi-react`, `nextjs-prisma`, and `sveltekit` default to `js`.
- `angular-node` defaults to `ts` and currently only supports `ts`.
- `--lang` also accepts `javascript` and `typescript` aliases.

## Acknowledgements

React frontend templates in this project are based on
[create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite),
MIT licensed. Copyright (c) 2019-present Yuxi (Evan) You and Vite contributors.

Next.js template in this project is based on
[create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app),
MIT licensed. Copyright (c) 2024 Vercel, Inc.

## License

MIT
