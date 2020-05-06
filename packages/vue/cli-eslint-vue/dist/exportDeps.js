"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-02 16:49:18
 * @LastEditTime : 2020-05-02 17:21:29
 */
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var DEV_DEPENDENCIES = {
    base: {
        eslint: '^6.7.2',
        'eslint-plugin-vue': '^6.2.2'
    },
    airbnb: {
        '@vue/eslint-config-airbnb': '^5.0.2',
        'eslint-plugin-import': '^2.20.2'
    },
    prettier: {
        '@vue/eslint-config-prettier': '^6.0.0',
        'eslint-plugin-prettier': '^3.1.1',
        prettier: '^1.19.1'
    },
    standard: {
        '@vue/eslint-config-standard': '^5.1.2',
        'eslint-plugin-import': '^2.20.2',
        'eslint-plugin-node': '^11.1.0',
        'eslint-plugin-promise': '^4.2.1',
        'eslint-plugin-standard': '^4.0.0'
    },
    "typescript": {
        '@vue/eslint-config-typescript': '^5.0.2',
        '@typescript-eslint/eslint-plugin': '^2.26.0',
        '@typescript-eslint/parser': '^2.26.0'
    }
};
exports.getDeps = function (answers) {
    var presets = answers.eslintConfig;
    var deps = Object.assign({}, DEV_DEPENDENCIES.base, DEV_DEPENDENCIES.prettier, DEV_DEPENDENCIES[presets]);
    if (cli_shared_utils_1.hasTypescript(answers)) {
        Object.assign(deps, DEV_DEPENDENCIES.typescript);
    }
    else {
        Object.assign(deps, { 'babel-eslint': '^10.1.0' });
    }
    return deps;
};
