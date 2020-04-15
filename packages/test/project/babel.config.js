/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-14 18:16:35
 * @LastEditTime : 2020-04-14 19:15:49
 */
module.exports = (api) => {
    api.cache(true);
    return {
        presets: [["@babel/preset-env",{"corejs":3,"modules":false,"useBuiltIns":"usage"}],"@babel/preset-typescript"],
        plugins: ["@babel/plugin-proposal-object-rest-spread","@babel/plugin-syntax-dynamic-import","@babel/plugin-proposal-class-properties"]
    }
}