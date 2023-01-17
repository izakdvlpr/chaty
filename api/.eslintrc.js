const { resolve } = require('path');

module.exports = {
  root: true,
  extends: ['@hitechline', '@hitechline/eslint-config/typescript'],
  overrides: [
    {
      files: ['**/*.ts'],
      rules: { 'import/require-default-props': 'off' },
    },
  ],
  rules: {
    'import/no-cycle': 'off',
    'max-classes-per-file': 'off',
    'no-useless-constructor': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
};
