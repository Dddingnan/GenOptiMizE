module.exports = {
  extends: ['airbnb-typescript-prettier'],
  rules: {
    'consistent-return': 'off',
    'lines-between-class-members': 'off',
    'import/export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
