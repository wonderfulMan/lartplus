"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-28 17:30:13
 * @LastEditTime : 2020-05-13 18:01:51
 */
function resolvedLartplusCliVersion() {
    var cliPackage = require('../../package.json');
    var cliVersion = cliPackage.version;
    return cliVersion;
}
exports.resolvedLartplusCliVersion = resolvedLartplusCliVersion;
