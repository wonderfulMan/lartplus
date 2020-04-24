"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var parseMerge = function (entries, template) {
    var result = [];
    entries.forEach(function (it) {
        var isTrue = template.filter(function (temp) { return temp.dirName === it.appName; })[0];
        if (isTrue) {
            result.push(__assign(__assign({}, it), { templatePath: isTrue.templatePath }));
        }
    });
    result = result.filter(Boolean);
    if (result.length < 1) {
        cli_shared_utils_1.notice.error(['entires目录下入口文件和public目录下模版文件没有一个与之对应，请检查']);
        process.exit(0);
    }
    return result.filter(Boolean);
};
exports.parseMerge = parseMerge;
