"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-13 15:03:19
 * @LastEditTime : 2020-04-15 14:09:19
 */
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var language_1 = require("./language");
var CreateScript = /** @class */ (function () {
    function CreateScript(context, chain) {
        this.context = context;
        this.chain = chain;
    }
    CreateScript.prototype.setJavascript = function () {
        this.chain.module
            .rule('javascript')
            .test(language_1.language.JS)
            .use('js-babel-loader')
            .loader(cli_shared_utils_1.maybeLoader('babel-loader'));
        this.chain.plugin('vue-loader-plugin')
            .use(cli_shared_utils_1.maybeLoader('vue-loader/lib/plugin'));
    };
    CreateScript.prototype.setTypescript = function () {
        this.chain.module
            .rule('typescript')
            .test(language_1.language.TS)
            .use('ts-babel-loader')
            .loader(cli_shared_utils_1.maybeLoader('babel-loader'));
        this.chain.module
            .rule('tsx')
            .test(language_1.language.TSX)
            .use('tsx-babel-loader')
            .loader(cli_shared_utils_1.maybeLoader('babel-loader'));
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
