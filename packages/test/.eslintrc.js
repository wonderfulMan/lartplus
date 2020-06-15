module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/airbnb",
    "@vue/prettier",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint"
  ],
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "rules": {
    "no-console": "off",
    "no-debugger": "off"
  }
}