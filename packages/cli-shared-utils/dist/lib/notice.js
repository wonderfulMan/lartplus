"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 15:57:42
 * @LastEditTime : 2020-02-01 19:25:30
 */
var chalk_1 = __importDefault(require("chalk"));
var warnLogger = console.warn;
var normalLogger = console.log;
var errorLogger = console.error;
var clear = console.clear;
var notice = {
    warn: function (strs) {
        normalLogger(chalk_1["default"].black.bgYellow(" WARN: ") + chalk_1["default"].whiteBright(" " + strs.map(function (it) { return it; }).join('/n')));
    },
    error: function (strs) {
        errorLogger(chalk_1["default"].black.bgRed(" ERROR: ") + chalk_1["default"].whiteBright(" " + strs.map(function (it) { return it; }).join('/n')));
    },
    success: function (strs) {
        normalLogger(chalk_1["default"].black.bgGreen(" SUCCESS: ") + chalk_1["default"].whiteBright(" " + strs.map(function (it) { return it; }).join('/n')));
    },
    done: function (strs) {
        normalLogger(chalk_1["default"].black.bgGreen(" DONE: ") + chalk_1["default"].whiteBright(" " + strs.map(function (it) { return it; }).join('/n')));
    }
};
exports["default"] = __assign(__assign({}, notice), { warnLogger: warnLogger,
    normalLogger: normalLogger,
    errorLogger: errorLogger,
    clear: clear });
