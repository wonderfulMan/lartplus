"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-26 13:15:53
 * @LastEditTime : 2020-01-26 14:09:36
 */
var typedi_1 = require("typedi");
var pwa_1 = __importDefault(require("./pwa"));
var linter_1 = __importDefault(require("./linter"));
var TypescriptSupport_1 = __importDefault(require("./TypescriptSupport"));
var FeaturePresets = /** @class */ (function () {
    function FeaturePresets() {
    }
    FeaturePresets.prototype.config = function () {
        return {
            name: 'feature',
            type: 'checkbox',
            message: '常用功能',
            choices: [
                this.pwa.choices(),
                this.linter.choices(),
                this.typescriptConfig.choices(),
            ]
        };
    };
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", pwa_1["default"])
    ], FeaturePresets.prototype, "pwa");
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", linter_1["default"])
    ], FeaturePresets.prototype, "linter");
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", TypescriptSupport_1["default"])
    ], FeaturePresets.prototype, "typescriptConfig");
    FeaturePresets = __decorate([
        typedi_1.Service()
    ], FeaturePresets);
    return FeaturePresets;
}());
exports["default"] = FeaturePresets;
