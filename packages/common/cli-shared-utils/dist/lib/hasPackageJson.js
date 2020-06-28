"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-13 16:32:44
 * @LastEditTime : 2020-05-13 17:36:12
 */
var cli_config_1 = require("@lartplus/cli-config");
function hasPackageJson(targetDir) {
    var jsonContext = false;
    try {
        jsonContext = require(cli_config_1.PATHS.getProjectPackagePath(targetDir));
    }
    catch (error) {
        jsonContext = false;
    }
    return jsonContext;
}
exports.hasPackageJson = hasPackageJson;
