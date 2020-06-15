"use strict";
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var cli_config_1 = require("@lartplus/cli-config");
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-06 16:42:57
 * @LastEditTime : 2020-05-14 18:00:10
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
            fix: true,
            // cache: true,
            // cacheIdentifier: Hash(new Date()),
            extensions: exportExtensions(cli_shared_utils_1.hasTypescript(this.context.configFile)),
            emitWarning: emitWarning,
            emitError: emitError,
            eslintPath: cli_shared_utils_1.maybeLoader('eslint')
        });
    };
    CreateEslintRules.prototype.buildLint = function () {
        if (cli_shared_utils_1.hasEslint(this.context.configFile)) {
            this.createRules();
        }
    };
    return CreateEslintRules;
}());
exports.CreateEslintRules = CreateEslintRules;
