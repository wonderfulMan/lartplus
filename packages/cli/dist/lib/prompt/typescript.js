"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-26 14:01:21
 * @LastEditTime : 2020-01-26 14:02:40
 */
var TypescriptSupport = /** @class */ (function () {
    function TypescriptSupport() {
    }
    TypescriptSupport.prototype.config = function () {
        return {
            name: 'typescript',
            value: 'typescript',
            short: 'typescript'
        };
    };
    TypescriptSupport = __decorate([
        Service()
    ], TypescriptSupport);
    return TypescriptSupport;
}());
