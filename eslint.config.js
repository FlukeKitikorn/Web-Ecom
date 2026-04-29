const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["JS/**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
