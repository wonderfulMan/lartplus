"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-26 13:31:35
 * @LastEditTime : 2020-03-26 17:25:27
 */
var typedi_1 = require("typedi");
var EslintConfig = /** @class */ (function () {
    function EslintConfig() {
    }
    EslintConfig.prototype.config = function () {
        return {
            name: 'eslint',
            message: "eslint格式化与配置",
            type: 'list',
            when: function (answers) { return answers.feature.includes('linter'); },
            choices: [
                {
                    name: 'ESLint + Airbnb config + Prettier',
                    value: 'Airbnb'
                },
                {
                    name: 'ESLint + Standard config + Prettier',
                    value: 'Standard'
                },
                {
                    name: 'ESLint + Prettier',
                    value: 'prettier',
                    short: 'Prettier'
                }
            ]
        };
    };
    EslintConfig = __decorate([
        typedi_1.Service()
    ], EslintConfig);
    return EslintConfig;
}());
exports["default"] = EslintConfig;
