"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-07 11:09:25
 * @LastEditTime : 2020-05-14 17:25:31
 */
exports.PATHS = {
    // 目标项目
    getLartPlusModulePath: function (target) { return target + "/node_modules/@lartplus"; },
    getEslintRcPath: function (target) { return target + "/.eslintrc.js"; },
    getPrettierRcPath: function (target) { return target + "/.prettierrc.js"; },
    getLartPlusFilePath: function (target) { return target + "/lartplus.config.js"; },
    getBableConfigFilePath: function (target) { return target + "/babel.config.js"; },
    getProjectPackagePath: function (target) { return target + "/package.json"; },
    getProjectTsconfigFilePath: function (target) { return target + "/tsconfig.json"; },
    getPostcssConfigFilePath: function (target) { return target + "/postcss.config.js"; },
    // 模版
    getLartPlusTemplatePath: function (target) { return target + "/template/lartplus.config.tpl"; },
    getLartPlusTsconfigTemplatePath: function (target) { return target + "/template/tsconfig.json.tpl"; },
    getLartPlusBabelTemplatePath: function (target) { return target + "/template/babel.config.tpl"; }
};
