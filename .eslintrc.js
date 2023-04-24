module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0,
    'max-len': ['error', 100],
    'strict': ['error', 'global']
  },
  plugins: ['jest']
  
};
