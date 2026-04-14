// src/registry.js
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const T = path.join(__dirname, "../templates");

export const TEMPLATES = {
  // MERN
  mern: {
    label: "MERN Stack",
    dir: path.join(T, "mern"),
    postSteps: [
      "npm install",
      "npm run setup",
      "cp server/.env.example server/.env",
      "npm run dev",
    ],
  },
  "mern-tw": {
    label: "MERN Stack + Tailwind",
    dir: path.join(T, "mern-tw"),
    postSteps: [
      "npm install",
      "npm run setup",
      "cp server/.env.example server/.env",
      "npm run dev",
    ],
  },
  "mern-ts": {
    label: "MERN Stack (TypeScript)",
    dir: path.join(T, "mern-ts"),
    postSteps: [
      "npm install",
      "npm run setup",
      "cp server/.env.example server/.env",
      "npm run dev",
    ],
  },
  "mern-ts-tw": {
    label: "MERN Stack (TypeScript + Tailwind)",
    dir: path.join(T, "mern-ts-tw"),
    postSteps: [
      "npm install",
      "npm run setup",
      "cp server/.env.example server/.env",
      "npm run dev",
    ],
  },

  // FastAPI + React
  "fastapi-react": {
    label: "FastAPI + React",
    dir: path.join(T, "fastapi-react"),
    postSteps: [
      "python -m venv backend/venv",
      "source backend/venv/bin/activate  # Windows: backend\\venv\\Scripts\\activate",
      "npm install",
      "npm run setup",
      "cp backend/.env.example backend/.env",
      "npm run dev",
    ],
  },
  "fastapi-react-tw": {
    label: "FastAPI + React + Tailwind",
    dir: path.join(T, "fastapi-react-tw"),
    postSteps: [
      "python -m venv backend/venv",
      "source backend/venv/bin/activate  # Windows: backend\\venv\\Scripts\\activate",
      "npm install",
      "npm run setup",
      "cp backend/.env.example backend/.env",
      "npm run dev",
    ],
  },
  "fastapi-react-ts": {
    label: "FastAPI + React (TypeScript)",
    dir: path.join(T, "fastapi-react-ts"),
    postSteps: [
      "python -m venv backend/venv",
      "source backend/venv/bin/activate  # Windows: backend\\venv\\Scripts\\activate",
      "npm install",
      "npm run setup",
      "cp backend/.env.example backend/.env",
      "npm run dev",
    ],
  },
  "fastapi-react-ts-tw": {
    label: "FastAPI + React (TypeScript + Tailwind)",
    dir: path.join(T, "fastapi-react-ts-tw"),
    postSteps: [
      "python -m venv backend/venv",
      "source backend/venv/bin/activate  # Windows: backend\\venv\\Scripts\\activate",
      "npm install",
      "npm run setup",
      "cp backend/.env.example backend/.env",
      "npm run dev",
    ],
  },

  // Next.js + Prisma
  // Tailwind is already on by default - no -tw variant
  "nextjs-prisma-ts": {
    label: "Next.js + Prisma (TypeScript)",
    dir: path.join(T, "nextjs-prisma-ts"),
    postSteps: ["npm install", "cp .env.example .env", "npx prisma generate"],
  },

  // Angular + Node
  "angular-node": {
    label: "Angular + Node.js",
    dir: path.join(T, "angular-node"),
    postSteps: [
      "npm install",
      "npm run setup",
      "cp server/.env.example server/.env",
      "npm run dev",
    ],
  },
  "angular-node-tw": {
    label: "Angular + Node.js + Tailwind",
    dir: path.join(T, "angular-node-tw"),
    postSteps: [
      "npm install",
      "npm run setup",
      "cp server/.env.example server/.env",
      "npm run dev",
    ],
  },
};

/**
 * Retrieves a template by key.
 *
 * @param {string} key - produced by resolveTemplateKey()
 * @returns {typeof TEMPLATES[string]}
 */
export function getTemplate(key) {
  const t = TEMPLATES[key];
  if (!t) {
    const valid = Object.keys(TEMPLATES).join(", ");
    throw new Error(`No template found for key "${key}". Valid keys: ${valid}`);
  }
  return t;
}

/**
 * Returns the stack choices shown in the wizard menu.
 * These are the base stack keys - the Tailwind flag is asked separately.
 *
 * @returns {{ name: string, value: string }[]}
 */
export function listStacks() {
  return [
    {
      name: "MERN                — MongoDB · Express · React · Node",
      value: "mern",
    },
    {
      name: "MERN (TypeScript)   — MongoDB · Express · React · Node",
      value: "mern-ts",
    },
    { name: "FastAPI + React", value: "fastapi-react" },
    {
      name: "FastAPI + React     (TypeScript)",
      value: "fastapi-react-ts",
    },
    {
      name: "Next.js + Prisma    (TypeScript · Tailwind included)",
      value: "nextjs-prisma-ts",
    },
    { name: "Angular + Node.js", value: "angular-node" },
  ];
}
