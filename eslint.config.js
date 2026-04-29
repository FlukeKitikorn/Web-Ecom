import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["JS/**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
