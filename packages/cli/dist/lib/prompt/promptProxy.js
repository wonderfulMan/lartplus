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
var typedi_1 = require("typedi");
var frameWork_1 = __importDefault(require("./frameWork"));
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-21 16:47:48
 * @LastEditTime : 2020-01-21 17:52:19
 */
var PromptProxy = /** @class */ (function () {
    function PromptProxy() {
    }
    PromptProxy.prototype.injectFeature = function (featurePrompt) {
        featurePrompt.push(this.framwWork.build());
    };
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", frameWork_1["default"])
    ], PromptProxy.prototype, "framwWork");
    PromptProxy = __decorate([
        typedi_1.Service()
    ], PromptProxy);
    return PromptProxy;
}());
exports["default"] = PromptProxy;
