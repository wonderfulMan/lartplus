"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-26 16:32:42
 * @LastEditTime : 2020-04-17 00:03:30
 */
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-26 16:32:42
 * @LastEditTime : 2020-04-15 11:06:39
 */
exports.__esModule = true;
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
exports.getBabelConfig = function (answers) {
    var filename = 'babel.config.js';
    var cwd = process.env.LARTPLUS_CONTEXT;
    if (answers.feature.includes('typescript')) {
        presets.push('@babel/preset-typescript');
    }
    return {
        sourceType: "unambiguous",
        presets: presets,
        plugins: plugins
    };
};
