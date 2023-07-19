module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0,
    strict: 0,
    'max-len': 0,
  },
  plugins: ['jest']
};

