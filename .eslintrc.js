module.exports = {
  extends: ['@mate-academy/eslint-config', 'plugin:jest/recommended'],
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
