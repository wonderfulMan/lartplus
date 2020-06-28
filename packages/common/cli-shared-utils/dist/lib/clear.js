"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-02-01 18:08:55
 * @LastEditTime : 2020-04-08 15:47:02
 */
var readline_1 = __importDefault(require("readline"));
function clearConsole() {
    if (process.stdout.isTTY) {
        var blank = '\n'.repeat(process.stdout.rows);
        console.log(blank);
        readline_1["default"].cursorTo(process.stdout, 0, 0);
        readline_1["default"].clearScreenDown(process.stdout);
    }
}
exports.clearConsole = clearConsole;
