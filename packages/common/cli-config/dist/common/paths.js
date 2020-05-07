"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-07 11:09:25
 * @LastEditTime : 2020-05-07 13:16:17
 */
exports.PATHS = {
    getLartPlusModulePath: function (target) { return target + "/node_modules/@lartplus"; },
    getEslintRcPath: function (target) { return target + "/.eslintrc.js"; },
    getPrettierRcPath: function (target) { return target + "/.prettierrc.js"; },
    getLartPlusFilePath: function (target) { return target + "/lartplus.config.js"; },
    getBableConfigFilePath: function (target) { return target + "/babel.config.js"; },
    getProjectPackagePath: function (target) { return target + "/package.json"; },
    getProjectTsconfigFilePath: function (target) { return target + "/tsconfig.json"; }
};
