module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    // "plugin:vue/essential",
    "plugin:vue-custom/custom",
    "@vue/standard",
    "@vue/prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "no-console": "off",
    "no-debugger": "off"
  }
}