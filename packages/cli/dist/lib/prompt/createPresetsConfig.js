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
 * @LastEditTime : 2020-01-26 14:18:35
 */
var typedi_1 = require("typedi");
var CreatePresetsConfig = /** @class */ (function () {
    function CreatePresetsConfig() {
    }
    CreatePresetsConfig.prototype.config = function () {
        return {
            name: "ok",
            message: '是否保存本次配置',
            type: "confirm"
        };
    };
    CreatePresetsConfig = __decorate([
        typedi_1.Service()
    ], CreatePresetsConfig);
    return CreatePresetsConfig;
}());
exports["default"] = CreatePresetsConfig;
