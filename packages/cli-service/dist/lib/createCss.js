"use strict";
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var CreateStyleVueRules = /** @class */ (function () {
    function CreateStyleVueRules(context, chain) {
        this.context = context;
        this.chain = chain;
        this.shouldExtract = this.context.mode !== 'dev';
    }
    CreateStyleVueRules.prototype.apploaders = function (rules, isCssModules, loader, loaderOptions) {
        var _a;
        var sourceMap = ((_a = this.context.configFile) === null || _a === void 0 ? void 0 : _a.cssSouceMap) || true;
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
        var normalModuleRule = baseRule.oneOf('normal-modules').test(/\.module\.\w+$/);
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
    CreateStyleVueRules.prototype.buildStyle = function () {
        this.createRules('css', '/\.css$/');
        this.createRules('less', '/\.less$/', 'less-loader');
        this.createRules('stylus', '/\.styl(us)?$/', 'stylus-loader');
        this.createRules('postcss', '/\.p(ost)?css$/');
        this.createRules('sass', '/\.sass$/', 'sass-loader');
        this.createRules('scss', '/\.scss$/', 'sass-loader');
    };
    return CreateStyleVueRules;
}());
exports.CreateStyleVueRules = CreateStyleVueRules;
