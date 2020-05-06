"use strict";
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-06 14:30:37
 * @LastEditTime : 2020-05-06 15:39:08
 */
var baseFile = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};
exports.genEslintConfigFile = function (answers) {
    var hasLint = answers.feature.includes('linter');
    if (hasLint) {
        var presets = answers.eslintConfig;
        if (presets === 'airbnb') {
            baseFile["extends"].push('@vue/airbnb');
        }
        if (presets === 'standard') {
            baseFile["extends"].push('@vue/standard');
        }
        if (presets === 'prettier') {
            baseFile["extends"].push('plugin:prettier/recommended');
        }
        if (cli_shared_utils_1.hasTypescript(answers)) {
            baseFile["extends"].push('@vue/typescript/recommended');
        }
        return baseFile;
    }
};
