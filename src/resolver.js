/**
 * Resolves the stack key and flags into a template folder name.
 * The returned string must match a folder under templates/ exactly.
 *
 * @param {string} stack - e.g. 'mern', 'mern-ts', 'fastapi-react-ts'
 * @param {{ tailwind: boolean }} flags
 * @returns {string}
 */
export function resolveTemplateKey(stack, flags) {
  const { tailwind = false } = flags;

  // nextjs-prisma-ts ships with Tailwind on by default
  if (stack === "nextjs-prisma-ts") return "nextjs-prisma-ts";

  return tailwind ? `${stack}-tw` : stack;
}
