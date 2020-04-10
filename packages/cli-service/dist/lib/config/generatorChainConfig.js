"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-24 14:34:36
 * @LastEditTime : 2020-04-10 17:21:05
 */
var webpack_chain_1 = __importDefault(require("webpack-chain"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var htmlPluginFilename_1 = require("./htmlPluginFilename");
var createVue_1 = require("./createVue");
var GeneratorChainConfig = /** @class */ (function () {
    /**
     * @description 构造器
     * @param context 当前上下文
     * @param entries 入口文件对象
     * @param env 环境变量对象
     * @param mode 启动模式
     */
    function GeneratorChainConfig(context, entries) {
        this.configChain = new webpack_chain_1["default"]();
        this.context = context;
        this.entries = entries;
    }
    /**
     * @description 转换entries对象给htmlplugin使用
     */
    GeneratorChainConfig.prototype.setTemplateConfig = function () {
        return this.entries.map(function (it) {
            var config = require(it.filePath).templateConfig;
            return {
                title: config.title,
                filename: config.filename
            };
        });
    };
    /**
     * @description 设置模版文件到webpack
     */
    GeneratorChainConfig.prototype.setTemplateToChain = function () {
        var _this = this;
        var templateConfigList = this.setTemplateConfig();
        this.entries.forEach(function (entry, index) {
            entry.htmlFilenamePath = htmlPluginFilename_1.htmlPluginFilename(_this.context.mode, entry, templateConfigList[index]);
            _this.configChain
                .plugin("html-plugin-" + entry.appName)
                .use(html_webpack_plugin_1["default"], [
                {
                    title: templateConfigList[index].title,
                    template: entry.templatePath,
                    filename: entry.htmlFilenamePath,
                    chunks: [entry.appName]
                }
            ]);
        });
        this.configChain.end();
    };
    /**
     * @description 通用配置 设置entries
     */
    GeneratorChainConfig.prototype.setEntriesToChain = function () {
        var _this = this;
        this.entries
            .forEach(function (it) {
            _this.configChain
                .entry(it.appName)
                .add(it.filePath);
        });
        this.configChain.end();
    };
    /**
     * @description 设置rules
     */
    GeneratorChainConfig.prototype.setFrameworkRelatedToChain = function () {
        if (this.context.configFile.framework === 'vue') {
            var createStyle = new createVue_1.CreateVueConfig(this.context, this.configChain);
            createStyle.buildAll();
        }
    };
    /**
     * @description 设置全局变量
     * @param framework
     */
    GeneratorChainConfig.prototype.setGlobalEnvToChain = function () {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        var DefinePlugin = require('webpack/lib/DefinePlugin');
        this.configChain
            .plugin('defineGlobal')
            .use(DefinePlugin, [{ 'process.env': this.context.env }]);
    };
    /**
     * @description 设置输出目录
     */
    GeneratorChainConfig.prototype.setOutputToChain = function () {
        this.configChain
            .output
            .path(this.context.cwdPath + "/dist")
            .filename('[name].bundle.js')
            .end();
    };
    /**
     * 对于不同的框架调用其他service服务生成配置
     * @param framework 框架名称
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    GeneratorChainConfig.prototype.switchFramework = function (framework) {
        return this;
    };
    /**
     * @description 切换平台（csr，ssr）,目前支持使用nestJs作为服务端框架进行服务端渲染
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    GeneratorChainConfig.prototype.switchPlatformRender = function (renderMode) {
        return this;
    };
    /**
     * @description 切换webpack模式
     */
    GeneratorChainConfig.prototype.switchWebpackMode = function () {
        this.configChain.mode(this.context.mode === 'dev' ? "development" : "production");
    };
    /**
     * 设置通用插件
     */
    GeneratorChainConfig.prototype.setGlobalPlugins = function () {
        return;
    };
    /**
     * @description 生成配置json
     */
    GeneratorChainConfig.prototype.generatorBaseConfig = function () {
        this.setEntriesToChain();
        this.setGlobalEnvToChain();
        this.setOutputToChain();
        this.switchWebpackMode();
        this.setTemplateToChain();
        this.setFrameworkRelatedToChain();
        this.setGlobalPlugins();
        console.log(JSON.stringify(this.configChain.toConfig()));
        return this.configChain;
    };
    return GeneratorChainConfig;
}());
exports.GeneratorChainConfig = GeneratorChainConfig;
