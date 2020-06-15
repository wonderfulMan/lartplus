"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-06 10:03:06
 * @LastEditTime : 2020-05-13 16:26:56
 */
function getCliModule(targetPath, presets, framework) {
    var baseStr = targetPath + "/cli-" + presets;
    return framework ? baseStr + "-" + framework : baseStr;
}
exports.getCliModule = getCliModule;
