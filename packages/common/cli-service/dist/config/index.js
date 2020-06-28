"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-18 15:53:33
 * @LastEditTime : 2020-03-26 15:16:40
 */
exports.CONFIG_FILE_NAME = 'lartplus.config';
// html-webpack-plugin 设置根目录
exports.GET_HTML_WEBPACK_PLUGIN_FILENAME = function (mode) {
    return mode === 'dev' ? 'FICTITIOUS' : '';
};
