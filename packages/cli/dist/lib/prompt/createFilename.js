"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-26 14:12:44
 * @LastEditTime : 2020-01-26 14:43:17
 */
var typedi_1 = require("typedi");
var CreateFilename = /** @class */ (function () {
    function CreateFilename() {
    }
    CreateFilename.prototype.config = function () {
        return {
            name: "createFilename",
            message: '保存配置文件名',
            when: function (answers) { return answers.createPresetsFile; },
            type: 'input',
            validate: function (input) {
                var done = this.async();
                if (!input) {
                    done('文件名不能为空');
                }
                if (input.length > 10 || input.length < 1) {
                    done('文件名不能超过10个字符，小于1个字符');
                }
                done(null, true);
                return true;
            }
        };
    };
    CreateFilename = __decorate([
        typedi_1.Service()
    ], CreateFilename);
    return CreateFilename;
}());
exports["default"] = CreateFilename;
