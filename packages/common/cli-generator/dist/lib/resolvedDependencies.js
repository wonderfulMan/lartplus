"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var resolvedVersion_1 = require("./resolvedVersion");
exports.resolveDependencies = function (answers) {
    var framework = utils_1.getFrameworkName(answers);
    var isTypescript = utils_1.hasTypescript(answers);
    var isEslint = utils_1.hasEslint(answers);
    var eslintConfig = utils_1.getEslintConfig(answers);
    // 开发依赖
    var devDependencies = {};
    // 如果是typescript
    if (isTypescript) {
        devDependencies["typescript"] = "\"^3.7.5\",";
        devDependencies["@lartplus/cli-babel-typescript"] = "\"" + resolvedVersion_1.lartplusCliVesion + "\",";
    }
    // 判断eslint规则
    if (isEslint) {
        devDependencies["eslint"] = "\"^6.5.1\",";
        if (eslintConfig === 'airbnb') {
            devDependencies['eslint-config-airbnb'] = "\"^18.0.1\",";
        }
        else {
            devDependencies['eslint-config-standard'] = "\"^14.1.0\",";
        }
        if (isTypescript) {
            devDependencies["@lartplus/cli-eslint-typescript"] = "\"" + resolvedVersion_1.lartplusCliVesion + "\",";
        }
        devDependencies["@lartplus/cli-prettier"] = "\"" + resolvedVersion_1.lartplusCliVesion + "\",";
        devDependencies["@lartplus/cli-eslint-" + framework] = "\"" + resolvedVersion_1.lartplusCliVesion + "\",";
    }
    devDependencies["@lartplus/cli-service"] = "\"" + resolvedVersion_1.lartplusCliVesion + "\",";
    devDependencies["@lartplus/cli-babel"] = "\"" + resolvedVersion_1.lartplusCliVesion + "\",";
    devDependencies["@lartplus/cli-babel-" + utils_1.getFrameworkName(answers)] = "\"" + resolvedVersion_1.lartplusCliVesion + "\",";
    devDependencies["@lartplus/cli-service-" + utils_1.getFrameworkName(answers)] = "\"" + resolvedVersion_1.lartplusCliVesion + "\"";
    // 上线依赖
    var dependencies = {};
    if (utils_1.getFrameworkName(answers) === 'react') {
        dependencies["react"] = "\"^16.13.1\",";
        dependencies["@hot-loader/react-dom"] = "\"^16.10.2\",";
        dependencies["react-router-dom"] = "\"^5.1.2\"";
    }
    else {
        if (isTypescript) {
            dependencies["vue-class-component"] = "\"^7.2.3\",";
            dependencies["vue-property-decorator"] = "\"^8.3.0\",";
        }
        dependencies["vue"] = "\"^2.6.11\",";
        dependencies["vue-router"] = "\"^3.1.6\"";
    }
    return { dependencies: dependencies, devDependencies: devDependencies };
};
