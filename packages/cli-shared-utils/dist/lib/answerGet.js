"use strict";
exports.__esModule = true;
exports.hasTypescript = function (answers) { return answers.feature.includes('typescript'); };
exports.getFrameworkName = function (answers) { return answers.framework; };
exports.getEslintConfig = function (answers) { return answers.eslintConfig; };
exports.hasEslint = function (answers) { return answers.feature.includes('linter'); };
