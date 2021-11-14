module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parserOptions: { project: './tsconfig.json' },
  },
  env: { es2021: true, browser: true, node: true }, //テストする際にはjest: trueも入れる
  plugins: ['import', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'func-style': ['error', 'expression'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off', //displayNameをセットする場合は要変更
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/newline-after-import': 'error',
    'import/no-default-export': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
  },
  overrides: [
    {
      files: ['src/App.tsx'],
      rules: {
        'import/no-default-export': 'off',
        'func-style': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
