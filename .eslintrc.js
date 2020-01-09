module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    jest: true
  },

  extends: ["plugin:vue/essential"],
  plugins: ['vue'],

  rules: {
    'vue/html-self-closing': [
      'off',
      {
        html: {
          'void': 'any'
        }
      }
    ],
    'no-console': 'off',
    'no-debugger': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  globals: {
    cy: true
  }

};
