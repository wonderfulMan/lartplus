"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-16 19:50:41
 * @LastEditTime : 2020-05-15 13:59:07
 */
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var getPresets_1 = require("./getPresets");
var getPlugins_1 = require("./getPlugins");
function install(babelConfig) {
    getPlugins_1.plugins.forEach(function (plugin) {
        return cli_shared_utils_1.applyBabelConfig(babelConfig, 'plugins', Array.isArray(plugin) ? plugin[0] : plugin, Array.isArray(plugin) ? plugin[1] : null);
    });
    getPresets_1.presets.forEach(function (preset) {
        return cli_shared_utils_1.applyBabelConfig(babelConfig, 'presets', Array.isArray(preset) ? preset[0] : preset, Array.isArray(preset) ? preset[1] : null);
    });
    return cli_shared_utils_1.applyBabelConfig(babelConfig, 'plugins', '@vue/transform-vue-jsx', null);
}
exports.install = install;
;
