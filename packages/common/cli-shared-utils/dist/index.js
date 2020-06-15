"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 13:23:02
 * @LastEditTime : 2020-05-15 13:41:29
 */
var fs_extra_1 = __importDefault(require("fs-extra"));
exports.fs = fs_extra_1["default"];
var figlet_1 = __importDefault(require("figlet"));
exports.figlet = figlet_1["default"];
var ora_1 = __importDefault(require("ora"));
exports.ora = ora_1["default"];
var chalk_1 = __importDefault(require("chalk"));
exports.chalk = chalk_1["default"];
var commander_1 = __importDefault(require("commander"));
exports.commander = commander_1["default"];
var inquirer_1 = __importDefault(require("inquirer"));
exports.inquirer = inquirer_1["default"];
var juicer_1 = __importDefault(require("juicer"));
exports.Juice = juicer_1["default"];
var execa_1 = __importDefault(require("execa"));
exports.execa = execa_1["default"];
var webpack_chain_1 = __importDefault(require("webpack-chain"));
exports.ConfigChain = webpack_chain_1["default"];
var notice_1 = require("./lib/notice");
exports.notice = notice_1.notice;
var validateProjectName_1 = require("./lib/validateProjectName");
exports.validateProjectName = validateProjectName_1.validateProjectName;
var clear_1 = require("./lib/clear");
exports.clearConsole = clear_1.clearConsole;
var checkNodeVersion_1 = require("./lib/checkNodeVersion");
exports.checkNodeVersion = checkNodeVersion_1.checkNodeVersion;
var getPackageVersion_1 = require("./lib/getPackageVersion");
exports.getPackageVersion = getPackageVersion_1.getPackageVersion;
var class_validator_1 = require("class-validator");
exports.registerSchema = class_validator_1.registerSchema;
exports.validate = class_validator_1.validate;
var compileTemplate_1 = require("./lib/compileTemplate");
exports.compileTemplate = compileTemplate_1.compileTemplate;
var copyTemplate_1 = require("./lib/copyTemplate");
exports.copyTemplate = copyTemplate_1.copyTemplate;
var maybeLoader_1 = require("./lib/maybeLoader");
exports.maybeLoader = maybeLoader_1.maybeLoader;
var applyBabelconfig_1 = require("./lib/applyBabelconfig");
exports.applyBabelConfig = applyBabelconfig_1.applyBabelConfig;
var getCliModule_1 = require("./lib/getCliModule");
exports.getCliModule = getCliModule_1.getCliModule;
var hasPackageJson_1 = require("./lib/hasPackageJson");
exports.hasPackageJson = hasPackageJson_1.hasPackageJson;
var getPackageModule_1 = require("./lib/getPackageModule");
exports.getPackageModule = getPackageModule_1.getPackageModule;
var answerGet_1 = require("./lib/answerGet");
exports.hasTypescript = answerGet_1.hasTypescript;
exports.getFrameworkName = answerGet_1.getFrameworkName;
exports.getEslintConfig = answerGet_1.getEslintConfig;
exports.hasEslint = answerGet_1.hasEslint;
exports.hasMobile = answerGet_1.hasMobile;
