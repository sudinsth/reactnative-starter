module.exports = {
  root: true,
  extends: ['plugin:react-hooks/recommended', '@react-native'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks', '@typescript-eslint', 'react', 'react-native'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['warn'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-console': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        indent: 'off',
        'object-curly-spacing': 'off',
      },
    },
  ],
};
