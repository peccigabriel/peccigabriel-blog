import nextPlugin from "@next/eslint-plugin-next";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

// Flat config nativo (sem FlatCompat), equivalente ao "next/core-web-vitals".
export default [
  { ignores: [".next/**", "node_modules/**", "out/**"] },
  {
    files: ["**/*.{js,jsx,mjs}"],
    plugins: {
      "@next/next": nextPlugin,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "react/jsx-key": "warn",
      "react/no-unknown-property": "warn",
      "react/jsx-no-target-blank": "warn",
      "react/react-in-jsx-scope": "off",
    },
  },
];
