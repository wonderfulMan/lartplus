"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 15:52:10
 * @LastEditTime : 2020-04-08 15:49:07
 */
var validate_npm_package_name_1 = __importDefault(require("validate-npm-package-name"));
var notice_1 = require("./notice");
var exit_1 = require("./exit");
function validateProjectName(name) {
    var ret = validate_npm_package_name_1["default"](name);
    if (!ret.validForNewPackages) {
        notice_1.notice.error(["\u65E0\u6548\u7684\u547D\u540D\uFF0C\u8BF7\u9075\u5FAAnpm\u5305\u547D\u540D\u89C4\u8303 -- " + name]);
        ret.errors && notice_1.notice.error(ret.errors);
        ret.warnings && notice_1.notice.warn(ret.warnings);
        exit_1.exit(0);
    }
}
exports.validateProjectName = validateProjectName;
