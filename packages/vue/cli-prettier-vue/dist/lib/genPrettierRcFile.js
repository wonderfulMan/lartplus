"use strict";
exports.__esModule = true;
exports.genPrettierRcFile = function (answers) {
    if (answers.feature.includes('linter')) {
        return {
            printWidth: 120,
            tabWidth: 4,
            singleQuote: true,
            semi: true,
            trailingComma: 'es5',
            bracketSpacing: true,
            jsxBracketSameLine: true,
            arrowParens: 'always',
            parser: answers.feature.includes('typescript') ? 'typescript' : 'babel'
        };
    }
};
