"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-21 13:27:38
 * @LastEditTime : 2020-03-20 15:54:52
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typedi_1 = require("typedi");
var FrameWorkPrompt = /** @class */ (function () {
    function FrameWorkPrompt() {
    }
    FrameWorkPrompt.prototype.config = function () {
        return {
            name: 'framework',
            message: '选择开发框架:',
            type: 'list',
            choices: [
                {
                    name: 'Vue',
                    value: 'vue'
                },
                {
                    name: 'React',
                    value: 'react'
                }
            ]
        };
    };
    FrameWorkPrompt = __decorate([
        typedi_1.Service()
    ], FrameWorkPrompt);
    return FrameWorkPrompt;
}());
exports["default"] = FrameWorkPrompt;
