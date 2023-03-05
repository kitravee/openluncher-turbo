module.exports = {
  ...require('eslint-config-custom/eslint-next.ts'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  }
}