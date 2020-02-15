module.exports = {
  root: true,
  env: {
    jest: true,
  },
  globals: {
    page: true,
    browser: true,
    context: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: '16.9',
    },
  },
  rules: {
    quotes: ['error', 'single'],
    semi: 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': [2],
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
};
