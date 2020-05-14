"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-16 19:50:41
 * @LastEditTime : 2020-05-14 10:31:44
 */
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
function install(babelConfig) {
    return cli_shared_utils_1.applyBabelConfig(babelConfig, 'plugins', '@vue/transform-vue-jsx', null);
}
exports.install = install;
;
