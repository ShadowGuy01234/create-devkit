// src/registry.js
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = path.join(__dirname, "../templates");

function normalizeLanguage(language) {
  if (!language) return undefined;
  const value = String(language).trim().toLowerCase();
  if (value === "javascript") return "js";
  if (value === "typescript") return "ts";
  return value;
}

export const TEMPLATES = {
  mern: {
    label: "MERN Stack",
    defaultLanguage: "js",
    variants: {
      js: path.join(TEMPLATES_DIR, "mern"),
      ts: path.join(TEMPLATES_DIR, "mern-ts"),
    },
    postSteps: [
      "cd client && npm install",
      "cd ../server && npm install",
      "cp server/.env.example server/.env",
    ],
  },
  "fastapi-react": {
    label: "FastAPI + React",
    defaultLanguage: "js",
    variants: {
      js: path.join(TEMPLATES_DIR, "fastapi-react"),
      ts: path.join(TEMPLATES_DIR, "fastapi-react-ts"),
    },
    postSteps: [
      "cd frontend && npm install",
      "cd ../backend && python -m venv venv && pip install -r requirements.txt",
    ],
  },
  "nextjs-prisma": {
    label: "Next.js + Prisma",
    defaultLanguage: "ts",
    variants: {
      ts: path.join(TEMPLATES_DIR, "nextjs-prisma-ts"),
    },
    postSteps: ["npm install", "npx prisma generate", "cp .env.example .env"],
  },
  "angular-node": {
    label: "Angular + Node.js",
    defaultLanguage: "ts",
    variants: {
      ts: path.join(TEMPLATES_DIR, "angular-node"),
    },
    postSteps: ["cd frontend && npm install", "cd ../server && npm install"],
  },
};

/**
 * Retrieves a template by key and language variant.
 * @param {string} name
 * @param {string} [language]
 * @returns {typeof TEMPLATES[string] & { language: string, dir: string }}
 */
export function getTemplate(name, language) {
  const t = TEMPLATES[name];
  if (!t) {
    const valid = Object.keys(TEMPLATES).join(", ");
    throw new Error(`Unknown template "${name}". Valid options: ${valid}`);
  }

  const resolvedLanguage =
    normalizeLanguage(language) || t.defaultLanguage || "js";
  const dir = t.variants?.[resolvedLanguage];

  if (!dir) {
    const supported = Object.keys(t.variants || {}).join(", ");
    throw new Error(
      `Template "${name}" does not support language "${resolvedLanguage}". Valid languages: ${supported}`,
    );
  }

  return {
    ...t,
    language: resolvedLanguage,
    dir,
  };
}

/**
 * Returns the supported language variants for a template.
 * @param {string} name
 * @returns {string[]}
 */
export function getTemplateLanguages(name) {
  const t = TEMPLATES[name];
  if (!t) {
    const valid = Object.keys(TEMPLATES).join(", ");
    throw new Error(`Unknown template "${name}". Valid options: ${valid}`);
  }
  return Object.keys(t.variants || {});
}

/**
 * Returns the default language variant for a template.
 * @param {string} name
 * @returns {string}
 */
export function getDefaultTemplateLanguage(name) {
  const t = TEMPLATES[name];
  if (!t) {
    const valid = Object.keys(TEMPLATES).join(", ");
    throw new Error(`Unknown template "${name}". Valid options: ${valid}`);
  }
  return t.defaultLanguage || getTemplateLanguages(name)[0] || "js";
}

/**
 * Returns a list of all available templates with their keys and labels.
 * @returns {{ key: string, label: string }[]}
 */
export function listTemplates() {
  return Object.entries(TEMPLATES).map(([key, val]) => ({
    key,
    label: val.label,
  }));
}
