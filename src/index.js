const path = require('path')

const base = require('@paniclobster/eslint-config-base')

const jsRules = require('./jsRules')

const tsRules = require('./tsRules')

module.exports = {
  ...base,
  extends: ['airbnb', 'plugin:react/jsx-runtime', 'prettier'],
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
  },
  rules: jsRules,
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        requireConfigFile: false,
        tsconfigRootDir: path.resolve(__dirname, '..'),
      },
      rules: {
        ...jsRules,
        ...tsRules,
      },
    },
  ],
}
