import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript'
    ],
    "rules": {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      'no-undef': 'off', // TypeScript handles this better anyway
      "tailwindcss/no-custom-classname": "off",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { "allowInterfaces": "with-single-extends" }
      ],

    }
  }),
];

export default eslintConfig;
