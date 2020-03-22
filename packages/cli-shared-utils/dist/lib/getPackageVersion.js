"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-17 15:08:49
 * @LastEditTime : 2020-03-17 15:52:30
 */
var path_1 = __importDefault(require("path"));
function getPackageVersion(pkgName, packagePath, prefix) {
    if (prefix === void 0) { prefix = '@lartplus'; }
    return prefix + "/" + pkgName + " " + require(path_1["default"].resolve(packagePath, 'package.json')).version;
}
exports["default"] = getPackageVersion;
