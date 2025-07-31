module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier' // disables rules that conflict with Prettier
  ],
  rules: {
    // customize or override rules here
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
