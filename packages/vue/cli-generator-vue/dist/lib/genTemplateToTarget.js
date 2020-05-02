"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-24 10:17:22
 * @LastEditTime : 2020-05-02 14:39:31
 */
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var path_1 = __importDefault(require("path"));
var copyTemplate_1 = require("@lartplus/cli-shared-utils/dist/lib/copyTemplate");
var choiseTemplateType = function (answers) {
    var isTypescript = cli_shared_utils_1.hasTypescript(answers);
    var baseDir = isTypescript ? 'typescript' : 'javascript';
    return path_1["default"].resolve(__dirname, "../../template/" + baseDir);
};
exports.genTemplateToTarget = function (answers, target) {
    var templateDirPath = choiseTemplateType(answers);
    copyTemplate_1.copyTemplate(target, templateDirPath);
};
