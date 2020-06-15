"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-06 17:19:43
 * @LastEditTime : 2020-05-06 17:21:27
 */
exports.__esModule = true;
var baseExtensions = ['.js', '.jsx', '.vue'];
function exportExtensions(hasTypescript) {
    return hasTypescript
        ? baseExtensions.concat('.ts', '.tsx')
        : baseExtensions;
}
exports.exportExtensions = exportExtensions;
