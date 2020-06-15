"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-16 19:50:41
 * @LastEditTime : 2020-04-17 17:31:58
 */
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
function install(babelConfig) {
    return cli_shared_utils_1.applyBabelConfig(babelConfig, 'presets', '@babel/preset-typescript', {
        allExtensions: true,
        isTSX: true
    });
}
exports.install = install;
;
