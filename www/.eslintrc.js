module.exports = {
    env: {
      es6: true,
      browser: true,
      node: true,
    },
    extends: [
      'airbnb',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
      'prettier/react',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import', 'react-hooks', 'react', 'prettier'],
    rules: {
      'class-methods-use-this': 'off',
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
      // typescript conflicting rules
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      // a11y (disable all)
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      // next.js
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      'import/resolver': {
        // this loads <rootdir>/tsconfig.json to eslint
        typescript: {},
      },
    },
  };
  