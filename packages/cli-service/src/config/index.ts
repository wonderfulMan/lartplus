import { CurrentMode } from "../typings/config";

/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-18 15:53:33
 * @LastEditTime : 2020-03-26 15:16:40
 */
export const CONFIG_FILE_NAME = 'lartplus.config' 

// html-webpack-plugin 设置根目录
export const GET_HTML_WEBPACK_PLUGIN_FILENAME = (mode: CurrentMode) => {
    return mode === 'dev' ? 'FICTITIOUS' : ''
};