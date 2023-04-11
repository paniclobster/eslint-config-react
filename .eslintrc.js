// eslint-disable-next-line import/no-extraneous-dependencies
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@paniclobster/eslint-config-base'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
}
