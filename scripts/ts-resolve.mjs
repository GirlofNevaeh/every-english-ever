import { existsSync } from "node:fs";
import { registerHooks } from "node:module";
import { fileURLToPath } from "node:url";

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (
      (specifier.startsWith("./") || specifier.startsWith("../")) &&
      !/\.(tsx?|jsx?|mjs|cjs|json|css)$/.test(specifier)
    ) {
      const parent = context.parentURL ?? import.meta.url;
      const tsUrl = new URL(`${specifier}.ts`, parent);
      if (existsSync(fileURLToPath(tsUrl))) return nextResolve(`${specifier}.ts`, context);
    }
    return nextResolve(specifier, context);
  },
});
