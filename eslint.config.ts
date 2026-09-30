import eslintReact from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  globalIgnores(["build/", ".react-router/"]),
  tseslint.configs.recommended,
  eslintReact.configs["recommended-typescript"],
  eslintConfigPrettier,
]);
