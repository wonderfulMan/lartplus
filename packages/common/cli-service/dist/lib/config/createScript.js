"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-13 15:03:19
 * @LastEditTime : 2020-04-24 13:57:34
 */
exports.__esModule = true;
var cli_config_1 = require("@lartplus/cli-config");
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var CreateScript = /** @class */ (function () {
    function CreateScript(context, chain) {
        this.context = context;
        this.chain = chain;
    }
    CreateScript.prototype.applyLoaders = function (rules, lang, loader, name) {
        rules
            .test(lang)
            .use(name)
            .loader(cli_shared_utils_1.maybeLoader(loader));
    };
    CreateScript.prototype.setJavascript = function () {
        var jsModule = this.chain.module
            .rule('javascript')
            .exclude
            .add(/\bcore-js\b/)
            .add(/\bwebpack\/buildin\b/)
            .add(/\node_modules/)
            .end();
        this.applyLoaders(jsModule, cli_config_1.LANGUAGE_TYPE.JS, 'babel-loader', 'js-babel-loader');
    };
    CreateScript.prototype.setTypescript = function () {
        var typescriptModule = this.chain.module
            .rule('typescript')
            .exclude
            .add(/\bcore-js\b/)
            .add(/\bwebpack\/buildin\b/)
            .add(/\node_modules/)
            .end();
        this.applyLoaders(typescriptModule, cli_config_1.LANGUAGE_TYPE.TS, 'babel-loader', 'ts-babel-loader');
        var tsxModule = this.chain.module
            .rule('tsx')
            .exclude
            .add(/\bcore-js\b/)
            .add(/\bwebpack\/buildin\b/)
            .add(/\node_modules/)
            .end();
        this.applyLoaders(tsxModule, cli_config_1.LANGUAGE_TYPE.TSX, 'babel-loader', 'tsx-babel-loader');
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
