"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-13 15:42:23
 * @LastEditTime : 2020-05-14 17:51:53
 */
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var DEV_DEPENDENCIES = {
    base: {
        "browserslist": "^4.11.1",
        "autoprefixer": "^9.7.5"
    },
    mobile: {
        "postcss-px-to-viewport": "^1.1.1"
    }
};
exports.exportGetDeps = function (answers) {
    var isMobile = cli_shared_utils_1.hasMobile(answers);
    var deps = Object.assign({}, DEV_DEPENDENCIES.base);
    if (isMobile) {
        Object.assign(deps, DEV_DEPENDENCIES.mobile);
    }
    return deps;
};
