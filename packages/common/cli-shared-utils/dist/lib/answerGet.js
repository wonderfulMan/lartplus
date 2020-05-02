"use strict";
exports.__esModule = true;
exports.hasTypescript = function (answers) {
    if (answers.feature) {
        return answers.feature.includes('typescript');
    }
    else {
        return answers.typescript || false;
    }
};
exports.getFrameworkName = function (answers) { return answers.framework; };
exports.getEslintConfig = function (answers) { return answers.eslintConfig; };
exports.hasEslint = function (answers) {
    if (answers.feature) {
        return answers.feature.includes('linter');
    }
    else {
        return answers.linter || false;
    }
};
