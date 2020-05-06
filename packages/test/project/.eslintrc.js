/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-06 16:32:11
 * @LastEditTime : 2020-05-06 16:36:54
 */
module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": ["plugin:vue/essential", "@vue/standard", "@vue/prettier", "@vue/typescript/recommended", "@vue/prettier/@typescript-eslint"],
    "parserOptions": {
        "ecmaVersion": 2020
    },
    "rules": {
        "no-console": "off",
        "no-debugger": "off"
    }
}