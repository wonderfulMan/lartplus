"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-26 15:01:29
 * @LastEditTime : 2020-04-14 17:47:50
 */
var htmlPluginFilename = function (mode, entriesMapItem, templateConfig) {
    // const userConfigBaseFilename = `${entriesMapItem.appName}/${templateConfig.filename}`;
    var innerbaseFilename = entriesMapItem.appName + "/index.html";
    return innerbaseFilename;
};
exports.htmlPluginFilename = htmlPluginFilename;
