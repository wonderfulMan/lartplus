"use strict";
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var cli_config_1 = require("@lartplus/cli-config");
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-06 16:42:57
 * @LastEditTime : 2020-05-11 14:41:43
 */
var CreateEslintRules = /** @class */ (function () {
    function CreateEslintRules(context, chain) {
        this.context = context;
        this.chain = chain;
    }
    CreateEslintRules.prototype.createRules = function () {
        var _a = this.context, cwdPath = _a.cwdPath, configFile = _a.configFile;
        var framework = configFile.framework, lintOnSave = configFile.lintOnSave;
        var eslintModulePath = cli_shared_utils_1.getCliModule(cli_config_1.PATHS.getLartPlusModulePath(cwdPath), 'eslint', framework);
        var exportExtensions = require(eslintModulePath).exportExtensions;
        var emitWarning = lintOnSave === true || lintOnSave === 'warning';
        var emitError = lintOnSave === 'error';
        this.chain.module
            .rule('eslint')
            .pre()
            .exclude
            .add(/node_modules/)
            .end()
            .test(cli_config_1.LANGUAGE_TYPE.ESLINT)
            .use('eslint-loader')
            .loader(cli_shared_utils_1.maybeLoader('eslint-loader'))
            .options({
            cache: true,
            extensions: exportExtensions(this.context.configFile.typescript),
            emitWarning: emitWarning,
            emitError: emitError,
            formatter: require('eslint-friendly-formatter'),
            eslintPath: cli_shared_utils_1.maybeLoader('eslint')
        });
    };
    CreateEslintRules.prototype.buildLint = function () {
        if (this.context.configFile.linter) {
            this.createRules();
        }
        else {
            // 初始化脚手架判断node_modules
            var cwdPackage = require(this.context.cwdPath + "/package.json");
            var needEslint = cwdPackage.devDependencies['eslint'];
            if (needEslint) {
                this.createRules();
            }
        }
    };
    return CreateEslintRules;
}());
exports.CreateEslintRules = CreateEslintRules;
