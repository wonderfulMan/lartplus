"use strict";
exports.__esModule = true;
var resolvedDependencies_1 = require("./resolvedDependencies");
var resolvedScripts_1 = require("./resolvedScripts");
exports.resolvedPackage = function (answers, projectName) {
    var _a = resolvedDependencies_1.resolveDependencies(answers), dependencies = _a.dependencies, devDependencies = _a.devDependencies;
    var scripts = resolvedScripts_1.resolvedScripts();
    return {
        scripts: scripts,
        dependencies: dependencies,
        devDependencies: devDependencies,
        projectName: projectName
    };
};
