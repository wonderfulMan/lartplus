"use strict";
exports.__esModule = true;
exports.getOptimizeCssOptions = function (context) {
    return ({
        assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
            safe: true,
            autoprefixer: { disable: true },
            mergeLonghand: false,
            discardComments: {
                removeAll: true
            }
        },
        canPrint: true
    });
};
