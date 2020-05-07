/*
 * @Author: hAo
 * @LastEditors: hAo
 * @Date: 2020-05-07 15:11:48
 * @LastEditTime: 2020-05-07 16:03:28
 */
module.exports = (api) => {
    api.cache(true);
    return {
        sourceType: "unambiguous",
        presets: [
            ["@babel/preset-env", {
                "corejs": 3,
                "modules": false,
                "useBuiltIns": "usage"
            }],
            ["@babel/preset-typescript", {
                "allExtensions": true,
                "isTSX": true
            }]
        ],
        plugins: [
            ["@babel/plugin-proposal-object-rest-spread"],
            ["@babel/plugin-syntax-dynamic-import"],
            ["@babel/plugin-proposal-decorators", {
                "legacy": true
            }],
            ["@babel/plugin-proposal-class-properties", {
                "loose": true
            }], "@vue/transform-vue-jsx"
        ]
    }
}