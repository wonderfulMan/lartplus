"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-26 16:32:42
 * @LastEditTime : 2020-04-17 17:35:54
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
        return cli_shared_utils_1.applyBabelConfig(babelConfig, 'plugins', Array.isArray(plugin) ? plugins[0] : plugins, Array.isArray(plugin) ? plugins[1] : null);
    });
    presets.forEach(function (preset) {
        return cli_shared_utils_1.applyBabelConfig(babelConfig, 'presets', Array.isArray(preset) ? plugins[0] : plugins, Array.isArray(preset) ? plugins[1] : null);
    });
    return babelConfig;
}
exports.getBabelConfig = getBabelConfig;
