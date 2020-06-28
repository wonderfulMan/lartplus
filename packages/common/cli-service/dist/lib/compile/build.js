"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var webpack_1 = __importDefault(require("webpack"));
var speed_measure_webpack_plugin_1 = __importDefault(require("speed-measure-webpack-plugin"));
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-24 10:11:12
 * @LastEditTime : 2020-03-24 10:12:29
 */
var startBuild = function (config, context, entriesMap) {
    var smp = new speed_measure_webpack_plugin_1["default"]();
    var smpConfig = smp.wrap(config.toConfig());
    webpack_1["default"](smpConfig)
        .run(function (err) {
        if (err === null) {
            cli_shared_utils_1.notice.success(['构建完成']);
        }
        return false;
    });
};
exports.startBuild = startBuild;
