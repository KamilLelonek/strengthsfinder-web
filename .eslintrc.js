module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': 'error',
    'no-unused-vars': [
      'error',
      {ignoreRestSiblings: true, argsIgnorePattern: '^_'}
    ],
    camelcase: ['error', {properties: 'always'}],
    'prettier/prettier': 'error',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
