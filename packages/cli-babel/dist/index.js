"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-26 16:32:42
 * @LastEditTime : 2020-03-26 20:34:03
 */
exports.__esModule = true;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var plugins = [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var presets = [
    [
        "@babel/preset-env",
        {
            "corejs": 3,
            "useBuiltIns": "usage"
        }
    ]
];
exports.getBabelConfig = function (framework) {
    var filename = 'babel.config.js';
    var cwd = process.env.LARTPLUS_CONTEXT;
    console.log(filename, cwd);
    if (framework === 'react') {
        presets.push('@babel/prest-react');
    }
    return {
        presets: presets,
        plugins: plugins
    };
};
