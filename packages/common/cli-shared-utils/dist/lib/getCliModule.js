"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-06 10:03:06
 * @LastEditTime : 2020-05-06 10:03:53
 */
function getCliModule(targetPath, presets, framework) {
    return targetPath + "/cli-" + presets + "-" + framework;
}
exports.getCliModule = getCliModule;
;
