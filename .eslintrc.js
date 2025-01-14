module.exports = {
  extends: "@mate-academy/eslint-config",
  env: {
    jest: true,
  },
  rules: {
    "no-proto": 0,
    quotes: ["error", "double"],
  },
  plugins: ["jest"],
};
