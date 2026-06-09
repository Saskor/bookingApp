import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintReact from "@eslint-react/eslint-plugin";
import eslintPluginReactRsc from "eslint-plugin-react-rsc";
import eslintPluginReactDom from "eslint-plugin-react-dom";
import eslintPluginReactWebApi from "eslint-plugin-react-web-api";
import eslintPluginReactNamingConvention from "eslint-plugin-react-naming-convention";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import importX from "eslint-plugin-import-x";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      js,
      "@eslint-react": eslintReact,
      "@eslint-react/rsc": eslintPluginReactRsc,
      "@eslint-react/dom": eslintPluginReactDom,
      "@eslint-react/web-api": eslintPluginReactWebApi,
      "@eslint-react/naming-convention": eslintPluginReactNamingConvention,
      "react-hooks": reactHooks,
      "unused-imports": unusedImports,
      "import-x": importX,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...eslintReact.configs.recommended.rules,
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "space-before-function-paren": ["error", "never"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-in-parens": ["error", "never"],
      "no-multi-spaces": "error",
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "error",
      indent: ["error", 2],
      "semi-style": ["error", "last"],
      "react/react-in-jsx-scope": 0,
      "@eslint-react/dom/no-unknown-property": [
        "error",
        {
          ignore: ["css", "someOtherProp"],
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
          prefix: ["I"],
        },
        {
          selector: "typeAlias",
          format: ["PascalCase"],
          prefix: ["I"],
        },
        {
          selector: "typeParameter",
          format: ["PascalCase"],
          prefix: ["T", "K", "V"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid",
        },
      ],
      "max-len": [
        "error",
        {
          code: 100,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "import-x/no-unresolved": "error",
      "import-x/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import-x/named": "error",
      "no-unused-vars": "off", // Turn off core rule to avoid double reports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],
    },
    settings: {
      // Automatically detect React version (optional but recommended)
      react: {
        version: "detect",
      },
      "import-x/resolver": { typescript: true },
    },
    ignores: ["./src/openapi/**"],
  },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  reactHooks.configs.flat.recommended,
]);
