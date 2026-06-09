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
    },
    settings: {
      // Automatically detect React version (optional but recommended)
      react: {
        version: "detect",
      },
    },
  },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
]);
