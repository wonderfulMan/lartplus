"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-26 15:01:29
 * @LastEditTime : 2020-03-26 15:42:41
 */
var htmlPluginFilename = function (mode, entriesMapItem, templateConfig) {
    var userConfigBaseFilename = entriesMapItem.appName + "/" + templateConfig.filename;
    var innerbaseFilename = entriesMapItem.appName + "/index.html";
    return templateConfig.filename
        ? userConfigBaseFilename
        : innerbaseFilename;
};
exports.htmlPluginFilename = htmlPluginFilename;
