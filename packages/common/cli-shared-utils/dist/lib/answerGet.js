"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-13 19:14:23
 * @LastEditTime : 2020-05-18 16:11:15
 */
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
exports.hasTypescript = function (answers) {
    if (answers.feature) {
        return answers.feature.includes('typescript');
    }
    else if (typeof answers.typescript === 'boolean') {
        return answers.typescript || false;
    }
    else {
        return cli_shared_utils_1.getPackageModule('typescript');
    }
};
exports.getFrameworkName = function (answers) {
    var _a;
    console.log(cli_shared_utils_1.getPackageModule('@lartplus/cli-service-vue'));
    if ((_a = answers) === null || _a === void 0 ? void 0 : _a.framework) {
        return answers.framework;
    }
    else if (cli_shared_utils_1.getPackageModule('@lartplus/cli-service-vue')) {
        return 'vue';
    }
    else {
        return 'react';
    }
};
exports.getEslintConfig = function (answers) { return answers.eslintConfig; };
exports.hasEslint = function (answers) {
    if (answers.feature) {
        return answers.feature.includes('linter');
    }
    else if (typeof answers.linter === 'boolean') {
        return answers.linter || false;
    }
    else {
        return cli_shared_utils_1.getPackageModule('eslint');
    }
};
exports.hasMobile = function (answers) {
    return answers.feature.includes('mobile');
};
