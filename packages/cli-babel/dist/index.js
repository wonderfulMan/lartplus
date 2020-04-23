"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-26 16:32:42
 * @LastEditTime : 2020-04-23 10:12:00
 */
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-26 16:32:42
 * @LastEditTime : 2020-04-15 11:06:39
 */
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var plugins = [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import",
    [
        "@babel/plugin-proposal-decorators",
        {
            "legacy": true
        }
    ],
    ["@babel/plugin-proposal-class-properties",
        {
            "loose": true
        }
    ]
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var presets = [
    [
        "@babel/preset-env",
        {
            "corejs": 3,
            "modules": false,
            "useBuiltIns": "usage"
        }
    ]
];
function getBabelConfig() {
    var babelConfig = {
        sourceType: "unambiguous",
        presets: [],
        plugins: []
    };
    plugins.forEach(function (plugin) {
        return cli_shared_utils_1.applyBabelConfig(babelConfig, 'plugins', Array.isArray(plugin) ? plugin[0] : plugin, Array.isArray(plugin) ? plugin[1] : null);
    });
    presets.forEach(function (preset) {
        return cli_shared_utils_1.applyBabelConfig(babelConfig, 'presets', Array.isArray(preset) ? preset[0] : preset, Array.isArray(preset) ? preset[1] : null);
    });
    return babelConfig;
}
exports.getBabelConfig = getBabelConfig;
