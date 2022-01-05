module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest'],
  overrides: [
    {
      files: ["*.js"],
      rules: {
        'max-len': 'off' // disables line length check
      }
    }
  ]
};
