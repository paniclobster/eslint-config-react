const jsBaseRules = {
  'import/extensions': [
    'error',
    {
      css: 'always',
      json: 'always',
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/*.config.{js,jsx,ts,tsx}',
        '**/*.setup.{js,jsx,ts,tsx}',
        '**/*.stories.{js,jsx,ts,tsx}',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/scripts/**/*.{js,jsx,ts,tsx}',
        '**/tests/**/*.{js,jsx,ts,tsx}',
      ],
    },
  ],
  'import/prefer-default-export': ['off'],
}

const jsRules = {
  'jsx-a11y/media-has-caption': ['off'],
  'react/jsx-fragments': ['error', 'element'],
  'react/jsx-props-no-spreading': ['off'],
  'react/jsx-uses-react': ['off'],
  'react/jsx-wrap-multilines': ['off'],
  'react/react-in-jsx-scope': ['off'],
  'react/require-default-props': ['off'],
}

module.exports = {
  ...jsBaseRules,
  ...jsRules,
}
