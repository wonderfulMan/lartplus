"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-09 16:26:33
 * @LastEditTime : 2020-04-24 14:36:27
 */
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var cli_config_1 = require("@lartplus/cli-config");
var CreateStyleVueRules = /** @class */ (function () {
    function CreateStyleVueRules(context, chain) {
        this.context = context;
        this.chain = chain;
        this.isProd = this.context.mode !== 'dev';
        this.shouldExtract = !this.isProd;
    }
    CreateStyleVueRules.prototype.apploaders = function (rules, isCssModules, loader, loaderOptions) {
        var _a;
        var sourceMap = ((_a = this.context.configFile) === null || _a === void 0 ? void 0 : _a.cssSourceMap) || true;
        if (this.shouldExtract) {
            rules.use('extract-css-plugin')
                .loader(cli_shared_utils_1.maybeLoader('mini-css-extract-plugin'))
                .options({
                hmr: !this.shouldExtract
            });
        }
        else {
            rules.use('vue-style-loader')
                .loader(cli_shared_utils_1.maybeLoader('vue-style-loader'))
                .options({
                sourceMap: sourceMap,
                shadowMode: true
            });
        }
        var cssOptions = this.calcCssLoaderOptions(sourceMap, isCssModules);
        rules.use('css-loader')
            .loader(cli_shared_utils_1.maybeLoader('css-loader'))
            .options(cssOptions);
        rules
            .use('postcss-loader')
            .loader(cli_shared_utils_1.maybeLoader('postcss-loader'))
            .options({ sourceMap: sourceMap });
        if (loader) {
            rules.use(loader)
                .loader(cli_shared_utils_1.maybeLoader(loader))
                .options(Object.assign({ sourceMap: sourceMap }, loaderOptions));
        }
    };
    CreateStyleVueRules.prototype.createRules = function (lang, test, loader, loaderOptions) {
        var baseRule = this.chain.module.rule(lang).test(test);
        // 单文件组件 普通
        var vueNormalRule = baseRule.oneOf('vue-normal').resourceQuery(/\?vue/);
        this.apploaders(vueNormalRule, false, loader, loaderOptions);
        // 单文件组件 模块
        var VueModuleRule = baseRule.oneOf('vue-module').resourceQuery(/module/);
        this.apploaders(VueModuleRule, true, loader, loaderOptions);
        // 外部文件 普通
        var normalRule = baseRule.oneOf('normal');
        this.apploaders(normalRule, false, loader, loaderOptions);
        // 外部文件 模块
        var normalModuleRule = baseRule.oneOf('normal-modules').test(cli_config_1.LANGUAGE_TYPE.MODULES);
        this.apploaders(normalModuleRule, true, loader, loaderOptions);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CreateStyleVueRules.prototype.calcCssLoaderOptions = function (sourceMap, isCssModules) {
        var importLoaders = 2;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var options = {
            sourceMap: sourceMap,
            importLoaders: importLoaders
        };
        if (isCssModules) {
            options['localIdentName'] = '[name]_[local]_[hash:base64:5]';
            options['modules'] = true;
        }
        return options;
    };
    CreateStyleVueRules.prototype.setCssPlugin = function () {
        var _a;
        var hasHash = ((_a = this.context.configFile) === null || _a === void 0 ? void 0 : _a.cssFileNameWithHash) || true;
        var filename = "css/[name]" + (hasHash ? '.[contenthash:8]' : '') + ".css";
        var chunkFilename = filename;
        var extractOptions = { filename: filename, chunkFilename: chunkFilename };
        if (this.shouldExtract) {
            this.chain.plugin('extract-css')
                .use(cli_shared_utils_1.maybeLoader('mini-css-extract-plugin'), [extractOptions]);
            var optimizationCssOption = {
                cssProcessor: cli_shared_utils_1.maybeLoader('cssnano'),
                cssProcessorOptions: {
                    reduceIdents: false,
                    autoprefixer: false,
                    safe: true,
                    discardComments: {
                        removeAll: true
                    }
                }
            };
            if (this.isProd) {
                this.chain.optimization
                    .minimizer('optimize-css-assets-webpack-plugin')
                    .use(cli_shared_utils_1.maybeLoader('optimize-css-assets-webpack-plugin'), [optimizationCssOption]);
            }
        }
    };
    CreateStyleVueRules.prototype.buildStyle = function () {
        this.createRules('css', cli_config_1.LANGUAGE_TYPE.CSS);
        this.createRules('less', cli_config_1.LANGUAGE_TYPE.LESS, 'less-loader');
        this.createRules('stylus', cli_config_1.LANGUAGE_TYPE.STYLUS, 'stylus-loader');
        this.createRules('postcss', cli_config_1.LANGUAGE_TYPE.POST);
        this.createRules('sass', cli_config_1.LANGUAGE_TYPE.SASS, 'sass-loader');
        this.createRules('scss', cli_config_1.LANGUAGE_TYPE.SCSS, 'sass-loader');
    };
    return CreateStyleVueRules;
}());
exports.CreateStyleVueRules = CreateStyleVueRules;
