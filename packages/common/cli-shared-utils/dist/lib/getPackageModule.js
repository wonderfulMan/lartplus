"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-15 11:13:06
 * @LastEditTime : 2020-05-15 13:31:00
 */
function getPackageModule(string) {
    try {
        var requireJson = require(process.cwd() + "/package.json");
        return requireJson.devDependencies[packageName] || false;
    }
    catch (error) {
        return false;
    }
}
exports.getPackageModule = getPackageModule;
