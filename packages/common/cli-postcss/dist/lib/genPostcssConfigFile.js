"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-13 15:41:02
 * @LastEditTime : 2020-06-04 11:49:37
 */
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var mobileConfig = function () {
    return {
        "postcss-px-to-viewport": {
            "unitToConvert": "px",
            "viewportWidth": 750,
            "viewportHeight": 1334,
            "unitPrecision": 3,
            "viewportUnit": "vw",
            "selectorBlackList": [".ignore", ".hairlines"],
            "minPixelValue": 1,
            "mediaQuery": false
        }
    };
};
exports.genPostcssConfigFile = function (answers) {
    var config = {
        plugins: [
            require('autoprefixer'),
        ]
    };
    cli_shared_utils_1.hasMobile(answers) && config.plugins.push(mobileConfig());
    return config;
};
