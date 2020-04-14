"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var language_1 = require("./language");
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-13 15:03:19
 * @LastEditTime : 2020-04-13 19:18:41
 */
var CreateScript = /** @class */ (function () {
    function CreateScript(context, chain) {
        this.context = context;
        this.chain = chain;
    }
    CreateScript.prototype.setJavascript = function () {
        this.chain.module
            .rule(language_1.language.JS)
            .use('js-babel-loader')
            .loader(cli_shared_utils_1.maybeLoader('babel-loader'));
    };
    CreateScript.prototype.setTypescript = function () {
        var babelTypescriptOptions = {
            allExtensions: false,
            allowNamespaces: true
        };
        this.chain.module
            .rule(language_1.language.TS)
            .use('ts-babel-loader')
            .loader(cli_shared_utils_1.maybeLoader('babel-loader'))
            .options(babelTypescriptOptions);
        this.chain.module
            .rule(language_1.language.TSX)
            .use('tsx-babel-loader')
            .loader(cli_shared_utils_1.maybeLoader('babel-loader'))
            .options(__assign(__assign({}, babelTypescriptOptions), { isTSX: true }));
    };
    CreateScript.prototype.buildAll = function () {
        this.setJavascript();
        if (this.context.configFile.typescript) {
            this.setTypescript();
        }
    };
    return CreateScript;
}());
exports.CreateScript = CreateScript;
