"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 15:57:42
 * @LastEditTime : 2020-04-08 15:48:51
 */
var chalk_1 = __importDefault(require("chalk"));
var warnLogger = console.warn;
var normalLogger = console.log;
var errorLogger = console.error;
var clear = console.clear;
exports.notice = {
    warn: function (strs) {
        warnLogger(chalk_1["default"].black.bgYellow(" WARN ") + chalk_1["default"].whiteBright(" " + strs.map(function (it) { return it; }).join('/n')));
    },
    error: function (strs) {
        errorLogger(chalk_1["default"].black.bgRed(" ERROR ") + chalk_1["default"].whiteBright(" " + strs.map(function (it) { return it; }).join('/n')));
    },
    success: function (strs) {
        normalLogger(chalk_1["default"].black.bgGreen(" SUCCESS ") + chalk_1["default"].whiteBright(" " + strs.map(function (it) { return it; }).join('/n')));
    },
    done: function (strs) {
        normalLogger(chalk_1["default"].black.bgGreen(" DONE ") + chalk_1["default"].whiteBright(" " + strs.map(function (it) { return it; }).join('/n')));
    },
    clear: clear,
    errorLogger: errorLogger,
    normalLogger: normalLogger,
    warnLogger: warnLogger
};
