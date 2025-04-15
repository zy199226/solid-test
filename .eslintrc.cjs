module.exports = {
  extends: ['prettier', 'eslint:recommended', 'plugin:solid/typescript'],
  plugins: ['solid', 'prettier'],
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
