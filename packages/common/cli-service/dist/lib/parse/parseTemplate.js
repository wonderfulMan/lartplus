"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-25 13:43:16
 * @LastEditTime : 2020-03-26 17:20:35
 */
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var readChildDir = function (childDir, templateDir) {
    return childDir
        .map(function (it) {
        var cur = templateDir + "/" + it;
        var stat = cli_shared_utils_1.fs.statSync(cur);
        var isDir = stat.isDirectory();
        return isDir && it;
    })
        .filter(Boolean);
};
// 获取与enteies文件与之对应的模块目录
var diffTemplateDirname = function (childDirName, entries) {
    var result = [];
    entries.forEach(function (it) {
        var isTrue = childDirName.filter(function (dir) { return dir === it.appName; })[0];
        if (isTrue) {
            result.push(isTrue);
        }
    });
    return result.filter(Boolean);
};
var getTemplateNames = function (childDirName, templateDir) {
    var templateNames = [];
    childDirName.forEach(function (it) {
        var basePath = templateDir + "/" + it + "/index.ejs";
        var exist = cli_shared_utils_1.fs.existsSync(basePath);
        if (exist) {
            templateNames.push({
                dirName: it,
                templatePath: basePath
            });
        }
    });
    return templateNames.filter(Boolean);
};
var parseTemplate = function (context, entries) {
    var templateDir = context.cwdPath + "/public";
    var hasTemplate = cli_shared_utils_1.fs.existsSync(templateDir);
    var templateNames = [];
    if (hasTemplate) {
        var childDir = cli_shared_utils_1.fs.readdirSync(templateDir);
        if (childDir.length > 0) {
            var childDirName = readChildDir(childDir, templateDir);
            if (childDirName.length > 0) {
                childDirName = diffTemplateDirname(childDirName, entries);
                templateNames = getTemplateNames(childDirName, templateDir);
            }
        }
    }
    if (templateNames.length < 1) {
        cli_shared_utils_1.notice.error(['public目录下没有任何与之entries的文件或者目录为空，请检查']);
        process.exit(0);
    }
    return templateNames;
};
exports.parseTemplate = parseTemplate;
