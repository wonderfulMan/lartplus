"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors: hAo
 * @Date: 2020-05-15 11:01:18
 * @LastEditTime: 2020-05-15 11:01:52
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.plugins = [
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
