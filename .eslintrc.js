module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: ["eslint:recommended", "overrides", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
