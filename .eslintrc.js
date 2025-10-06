module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 'off'
  },
  plugins: ['jest']
};
