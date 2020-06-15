"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors: hAo
 * @Date: 2020-04-10 15:03:01
 * @LastEditTime: 2020-04-10 15:03:49
 */
function maybeLoader(loader) {
    try {
        return require.resolve(loader);
    }
    catch (error) {
        return loader;
    }
}
exports.maybeLoader = maybeLoader;
