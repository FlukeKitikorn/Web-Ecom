const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    files: ["JS/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": ["warn", { varsIgnorePattern: "countCharacters|isValidPhone" }],
      "no-console": "off",
    },
  },
  {
    files: ["**/*.html"],
    plugins: {
      html: require("eslint-plugin-html"),
    },
  },
];