"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-28 17:28:22
 * @LastEditTime : 2020-05-13 17:57:15
 */
exports.__esModule = true;
exports.resolvedScripts = function () {
    var scripts = {
        "dev": "$(npm bin)/lartplus-service start dev",
        "build": "$(npm bin)/lartplus-service start build",
        "lint": "$(npm bin)/lartplus-service start lint",
        "create:components": "$(npm bin)/lartplus-service new components",
        "create:page": "$(npm bin)/lartplus-service new page",
        "create:model": "$(npm bin)/lartplus-service new model"
    };
    return scripts;
};
