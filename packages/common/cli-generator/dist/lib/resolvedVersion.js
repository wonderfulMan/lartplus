"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-28 17:30:13
 * @LastEditTime : 2020-05-07 19:35:07
 */
function getLartplusCliVesion() {
    var cliPackage = require('../../package.json');
    var cliVersion = cliPackage.version;
    return cliVersion;
}
exports.getLartplusCliVesion = getLartplusCliVesion;
