"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-24 10:17:22
 * @LastEditTime : 2020-05-02 15:57:26
 */
var path_1 = __importDefault(require("path"));
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var cli_shared_utils_2 = require("@lartplus/cli-shared-utils");
var choiseTemplateType = function (answers) {
    var isTypescript = cli_shared_utils_1.hasTypescript(answers);
    var baseDir = isTypescript ? 'typescript' : 'javascript';
    return path_1["default"].resolve(__dirname, "../../template/" + baseDir);
};
exports.genTemplateToTarget = function (answers, target) {
    var templateDirPath = choiseTemplateType(answers);
    cli_shared_utils_2.copyTemplate(target, templateDirPath);
};
