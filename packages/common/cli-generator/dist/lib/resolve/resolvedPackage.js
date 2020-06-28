"use strict";
exports.__esModule = true;
var resolvedDependencies_1 = require("./resolvedDependencies");
var resolvedScripts_1 = require("./resolvedScripts");
exports.resolvedPackage = function (answers, projectName, targetPath) {
    var _a = resolvedDependencies_1.resolvedDependencies(answers, targetPath), dependencies = _a.dependencies, devDependencies = _a.devDependencies;
    var scripts = resolvedScripts_1.resolvedScripts();
    return {
        "name": projectName,
        "version": "0.0.1",
        "private": true,
        "sideEffects": true,
        scripts: scripts,
        dependencies: dependencies,
        devDependencies: devDependencies
    };
};
