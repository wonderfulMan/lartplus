"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @Date: 2020-01-20 14:22:01
 * @LastEditTime : 2020-01-26 13:02:32
 */
var events_1 = __importDefault(require("events"));
require("reflect-metadata");
var typedi_1 = require("typedi");
var resolvePrompt_1 = __importDefault(require("./prompt/resolvePrompt"));
var Creator = /** @class */ (function (_super) {
    __extends(Creator, _super);
    function Creator() {
        return _super.call(this) || this;
    }
    Creator.prototype.create = function () {
        this.emit('create-start');
        this.resolvePrompt.executePrompt();
    };
    __decorate([
        typedi_1.Inject('projectName'),
        __metadata("design:type", String)
    ], Creator.prototype, "projectName");
    __decorate([
        typedi_1.Inject('targetDir'),
        __metadata("design:type", String)
    ], Creator.prototype, "targetDir");
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", resolvePrompt_1["default"])
    ], Creator.prototype, "resolvePrompt");
    Creator = __decorate([
        typedi_1.Service(),
        __metadata("design:paramtypes", [])
    ], Creator);
    return Creator;
}(events_1["default"].EventEmitter));
exports["default"] = Creator;
