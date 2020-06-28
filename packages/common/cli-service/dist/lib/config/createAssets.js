"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var cli_config_1 = require("@lartplus/cli-config");
var imagemin_webpack_plugin_1 = __importDefault(require("imagemin-webpack-plugin"));
var CreateAssets = /** @class */ (function () {
    function CreateAssets(context, chain) {
        var _a;
        this.context = context;
        this.chain = chain;
        this.assetsNameWithHash = ((_a = this.context.configFile) === null || _a === void 0 ? void 0 : _a.assetsNameWithHash) || true;
    }
    CreateAssets.prototype.genAssetSubPath = function (dir) {
        return dir + "/[name]." + (this.assetsNameWithHash ? '.[hash:8]' : '') + ".[ext]";
    };
    CreateAssets.prototype.genUrlLoaderOptions = function (dir) {
        return {
            limit: CreateAssets.LIMIT,
            fallback: {
                loader: cli_shared_utils_1.maybeLoader('file-loader'),
                name: this.genAssetSubPath(dir)
            }
        };
    };
    CreateAssets.prototype.setImages = function () {
        this.chain.module
            .rule('images')
            .test(cli_config_1.LANGUAGE_TYPE.IMAGE)
            .use('url-loader')
            .loader(cli_shared_utils_1.maybeLoader('url-loader'))
            .options(this.genUrlLoaderOptions('image'))
            .end();
    };
    CreateAssets.prototype.setSvg = function () {
        this.chain.module
            .rule('svg')
            .test(cli_config_1.LANGUAGE_TYPE.SVG)
            .use('file-loader')
            .loader(cli_shared_utils_1.maybeLoader('file-loader'))
            .options({
            name: this.genAssetSubPath('svg')
        })
            .end();
    };
    CreateAssets.prototype.setMedia = function () {
        this.chain.module
            .rule('media')
            .test(cli_config_1.LANGUAGE_TYPE.MEDIA)
            .use('url-loader')
            .loader(cli_shared_utils_1.maybeLoader('url-loader'))
            .options(this.genUrlLoaderOptions('media'))
            .end();
    };
    CreateAssets.prototype.setFont = function () {
        this.chain.module
            .rule('font')
            .test(cli_config_1.LANGUAGE_TYPE.FONT)
            .use('url-loader')
            .loader(cli_shared_utils_1.maybeLoader('url-loader'))
            .options(this.genUrlLoaderOptions('font'))
            .end();
    };
    CreateAssets.prototype.setImageOptimization = function () {
        this.chain.plugin('optimization-images')
            .use(imagemin_webpack_plugin_1["default"], [{
                disable: this.context.mode === 'dev',
                pngquant: {
                    quality: '95-100'
                },
                test: [cli_config_1.LANGUAGE_TYPE.IMAGE, cli_config_1.LANGUAGE_TYPE.SVG]
            }]);
    };
    CreateAssets.prototype.buildAll = function () {
        this.setImages();
        this.setFont();
        this.setMedia();
        this.setSvg();
        this.setImageOptimization();
    };
    CreateAssets.LIMIT = 4096;
    return CreateAssets;
}());
exports.CreateAssets = CreateAssets;
