"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-11 09:13:41
 * @LastEditTime : 2020-03-20 15:40:02
 */
var notice_1 = __importDefault(require("./notice"));
function checkNodeVersion(projectVersion) {
    var requireNodeVersion = projectVersion
        .replace(/\>=/, '');
    var currentNodeVersion = process.versions.node;
    var v1 = +requireNodeVersion.split('.')[0];
    var v2 = +currentNodeVersion.split('.')[0];
    console.log(v1, v2);
    7 <= 10;
    if (v2 <= v1) {
        notice_1["default"].error(["node\u7248\u672C\u5FC5\u987B\u5927\u4E8E" + requireNodeVersion + "\u4EE5\u4E0A"]);
        return false;
    }
    return true;
}
exports["default"] = checkNodeVersion;
