"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-28 17:28:22
 * @LastEditTime : 2020-04-14 15:33:35
 */
exports.resolvedScripts = function () {
    var scripts = {
        "dev": "\"$(npm bin)/lartplus-service start dev\",",
        "build": "\"$(npm bin)/lartplus-service start build\",",
        "lint": "\"$(npm bin)/lartplus-service start lint\",",
        "create:components": "\"$(npm bin)/lartplus-service new components\",",
        "create:page": "\"$(npm bin)/lartplus-service new page\",",
        "create:model": "\"$(npm bin)/lartplus-service new model\""
    };
    return scripts;
};
