const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

/**
 * Project ESLint configuration.
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'multiline-ternary': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
  },
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  globals: {
    React: 'readonly',
    JSX: 'readonly',
  },
}
