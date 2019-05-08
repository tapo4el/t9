module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'babel',
  ],
  parser: 'babel-eslint',
  rules: {
    "indent" : ["error", 4, { "ignoredNodes": ["JSXElement *"] }],
    "react/jsx-indent": ["error", 4, { "props": 4 }],
  }
};
