"use strict";
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var cli_config_1 = require("@lartplus/cli-config");
var createCss_1 = require("./createCss");
var CreateVueConfig = /** @class */ (function () {
    function CreateVueConfig(context, chain) {
        this.context = context;
        this.chain = chain;
    }
    CreateVueConfig.prototype.setStyle = function () {
        var createCss = new createCss_1.CreateStyleVueRules(this.context, this.chain);
        createCss.buildStyle();
    };
    CreateVueConfig.prototype.setVueFile = function () {
        this.chain.module
            .rule('vue')
            .test(cli_config_1.LANGUAGE_TYPE.VUE)
            .use('vue-loader')
            .loader(cli_shared_utils_1.maybeLoader('vue-loader'))
            .options({
            compilerOptions: {
                preserveWhitespace: false
            }
        });
        this.chain.plugin('vue-loader-plugin')
            .use(cli_shared_utils_1.maybeLoader('vue-loader/lib/plugin'));
    };
    CreateVueConfig.prototype.buildAll = function () {
        this.setStyle();
        this.setVueFile();
    };
    return CreateVueConfig;
}());
exports.CreateVueConfig = CreateVueConfig;
