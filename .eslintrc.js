module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    strict: 0,
    'max-len': 0,
    'no-proto': 0
  },
  plugins: ['jest']
};
