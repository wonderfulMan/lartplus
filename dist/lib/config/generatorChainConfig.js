"use strict";var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};exports.__esModule=!0;var html_webpack_plugin_1=__importDefault(require("html-webpack-plugin")),cli_shared_utils_1=require("@lartplus/cli-shared-utils"),htmlPluginFilename_1=require("./htmlPluginFilename"),createScript_1=require("./createScript"),cli_config_1=require("@lartplus/cli-config"),GeneratorChainConfig=function(){function t(t,e){this.configChain=new cli_shared_utils_1.ConfigChain,this.context=t,this.entries=e}return t.prototype.setTemplateToChain=function(){var e=this;this.entries.forEach(function(t){t.htmlFilenamePath=htmlPluginFilename_1.htmlPluginFilename(e.context.mode,t),e.configChain.plugin("html-plugin-"+t.appName).use(html_webpack_plugin_1.default,[{template:t.templatePath,filename:t.htmlFilenamePath,chunks:[t.appName]}])}),this.configChain.end()},t.prototype.setEntriesToChain=function(){var e=this;this.entries.forEach(function(t){e.configChain.entry(t.appName).add(t.filePath)}),this.configChain.end()},t.prototype.setFrameworkRelatedToChain=function(){var t=this.context,e=t.cwdPath,i=t.configFile,n=cli_shared_utils_1.getCliModule(cli_config_1.PATHS.getLartPlusModulePath(e),"service",cli_shared_utils_1.getFrameworkName(i));new(require(n).CreateVueConfig)(this.context,this.configChain).buildAll(),new createScript_1.CreateScript(this.context,this.configChain).buildAll()},t.prototype.setGlobalEnvToChain=function(){var t=require("webpack/lib/DefinePlugin");this.configChain.plugin("defineGlobal").use(t,[{"process.env":this.context.env}])},t.prototype.setOutputToChain=function(){this.configChain.output.path(this.context.cwdPath+"/dist").filename("[name].bundle.js").end()},t.prototype.switchFramework=function(t){return this},t.prototype.switchPlatformRender=function(t){return this},t.prototype.switchWebpackMode=function(){this.configChain.mode("dev"===this.context.mode?"development":"production")},t.prototype.setGlobalPlugins=function(){},t.prototype.generatorBaseConfig=function(){return this.setEntriesToChain(),this.setGlobalEnvToChain(),this.setOutputToChain(),this.switchWebpackMode(),this.setTemplateToChain(),this.setFrameworkRelatedToChain(),this.setGlobalPlugins(),console.log("====="),console.log(JSON.stringify(this.configChain.toConfig())),console.log("====="),this.configChain},t}();exports.GeneratorChainConfig=GeneratorChainConfig;