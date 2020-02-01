"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 13:23:02
 * @LastEditTime : 2020-02-01 18:15:19
 */
var figlet_1 = __importDefault(require("figlet"));
exports.figlet = figlet_1["default"];
var commander_1 = __importDefault(require("commander"));
exports.commander = commander_1["default"];
var inquirer_1 = __importDefault(require("inquirer"));
exports.inquirer = inquirer_1["default"];
var fs_extra_1 = __importDefault(require("fs-extra"));
exports.fs = fs_extra_1["default"];
var juicer_1 = __importDefault(require("juicer"));
exports.juicer = juicer_1["default"];
var notice_1 = __importDefault(require("./lib/notice"));
exports.notice = notice_1["default"];
var validateProjectName_1 = __importDefault(require("./lib/validateProjectName"));
exports.validateProjectName = validateProjectName_1["default"];
var clear_1 = __importDefault(require("./lib/clear"));
exports.clearConsole = clear_1["default"];
