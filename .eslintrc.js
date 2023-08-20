module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
    jest: true,

    // ... any other environments you need
  },
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      plugins: ['@babel/plugin-syntax-jsx'],
    },
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Ensures that your code is formatted with prettier
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
};
