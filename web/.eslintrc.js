module.exports = {
  root: true,
  extends: [
    '@hitechline',
    '@hitechline/eslint-config/web',
    '@hitechline/eslint-config/typescript',
  ],
  rules: {
    'react/jsx-no-useless-fragment': 'off',
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-nested-ternary': 'off',

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'groups': [
          'type',
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
        ],
      },
    ],
  },
};
