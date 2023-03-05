// module.exports = {
//   env: {
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'airbnb-base',
//     'airbnb-typescript/base',
//     'plugin:import/errors',
//     'plugin:import/warnings',
//     'plugin:import/typescript',
//     'prettier',
//   ],
//   plugins: ['import', '@typescript-eslint'],
//   parserOptions: {
//     project: ['./tsconfig.json'],
//   },
//   settings: {
//     'import/parsers': {
//       '@typescript-eslint/parser': ['.ts'],
//     },
//     'import/resolver': {
//       node: {
//         extensions: ['.js', '.ts'],
//         moduleDirectory: ['node_modules', 'src/'],
//       },
//       typescript: {
//         alwaysTryTypes: true,
//         project: '.',
//       },
//     },
//   },
//   rule: {
//     'no-console': [
//       2,
//       {
//         allow: ['warn', 'error'],
//       },
//     ],
//     'import/order': [
//       'warn',
//       {
//         groups: [
//           'builtin',
//           'external',
//           'internal',
//           'parent',
//           'sibling',
//           'index',
//           'object',
//           'type',
//         ],
//         'newlines-between': 'always',
//         alphabetize: { order: 'asc', caseInsensitive: true },
//       },
//     ],
//   },
//   overrides: [
//     {
//       env: {
//         jest: true,
//       },
//       files: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[jt]s'],
//       extends: ['plugin:jest/recommended'],
//       rules: {
//         'import/no-extraneous-dependencies': [
//           'off',
//           { devDependencies: ['**/?(*.)+(spec|test).[jt]s'] },
//         ],
//       },
//     },
//   ],
//   ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist', 'coverage'],
// }

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['import', '@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: '.',
      },
    },
  },
  rules: {
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
