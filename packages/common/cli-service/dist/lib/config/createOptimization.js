"use strict";
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var terserOptions_1 = require("./terserOptions");
var optimizeCssOptions_1 = require("./optimizeCssOptions");
var CreateOptimization = /** @class */ (function () {
    function CreateOptimization(context, chain) {
        this.context = context;
        this.chain = chain;
    }
    CreateOptimization.prototype.setScriptOptimization = function () {
        this.chain.optimization
            .minimize(this.context.mode === 'build')
            .usedExports(true)
            .concatenateModules(true)
            .runtimeChunk({ name: 'manifest' })
            .namedModules(true)
            .namedChunks(true)
            .minimizer('terser')
            .use(cli_shared_utils_1.maybeLoader('terser-webpack-plugin'), [terserOptions_1.getTerserOptions(this.context)])
            .end();
    };
    CreateOptimization.prototype.setCssOptimization = function () {
        this.chain.optimization
            .minimizer('optimizeCss')
            .use(cli_shared_utils_1.maybeLoader('optimize-css-assets-webpack-plugin'), [optimizeCssOptions_1.getOptimizeCssOptions(this.context)]);
    };
    CreateOptimization.prototype.setSplitChunks = function () {
        this.chain.optimization
            .splitChunks({
            cacheGroups: {
                vendors: {
                    name: "chunk-vendors",
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: "chunk-common",
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        });
    };
    CreateOptimization.prototype.buildAll = function () {
        this.setScriptOptimization();
        this.setCssOptimization();
        this.setSplitChunks();
    };
    return CreateOptimization;
}());
exports.CreateOptimization = CreateOptimization;
