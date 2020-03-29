"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var resolveVersion_1 = require("./resolveVersion");
exports.resolveDependencies = function (answers) {
    var dependencies = {
        "@lartplus/cli-service": "\"^" + resolveVersion_1.lartplusCliVesion + "\",",
        "@lartplus/cli-babel": "\"^" + resolveVersion_1.lartplusCliVesion + "\",",
        "@lartplus/cli-lint": "\"^" + resolveVersion_1.lartplusCliVesion + "\","
    };
    if (utils_1.isTypescript(answers)) {
        dependencies["@lartplus/cli-typescript"] = "\"^" + resolveVersion_1.lartplusCliVesion + "\",";
    }
    dependencies["@lartplus/cli-service-" + utils_1.getFrameworkName(answers)] = "\"^" + resolveVersion_1.lartplusCliVesion + "\"";
    return dependencies;
};
