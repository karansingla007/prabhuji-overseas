import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReact from "eslint-plugin-react";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  {
    ignores: ["node_modules/", ".next/", "out/", "android/", "ios/", "build/", "app/testing/"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      react: eslintPluginReact,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // For small websites, be a bit more lenient with file size
      "max-lines": [
        "warn",
        {
          max: 500,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      // Accessibility is important
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/aria-role": "warn",

      // Prevent common React errors
      "react/prop-types": "off", // Using TypeScript instead
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/no-unescaped-entities": "warn",
      "react/jsx-key": "error",

      // Styling and formatting
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],

      // TypeScript specific
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off", // Too strict for small projects
    },
  },
];

export default config;
