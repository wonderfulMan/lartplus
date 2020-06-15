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
 * @Date: 2020-01-26 14:12:44
 * @LastEditTime : 2020-01-26 14:31:38
 */
var typedi_1 = require("typedi");
var CreatePresetsFile = /** @class */ (function () {
    function CreatePresetsFile() {
    }
    CreatePresetsFile.prototype.config = function () {
        return {
            name: "createPresetsFile",
            message: '是否保存本次配置',
            type: "confirm"
        };
    };
    CreatePresetsFile = __decorate([
        typedi_1.Service()
    ], CreatePresetsFile);
    return CreatePresetsFile;
}());
exports["default"] = CreatePresetsFile;
