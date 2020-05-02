/*
 * @Author: hAo
 * @LastEditors: hAo
 * @Date: 2020-05-02 14:25:31
 * @LastEditTime: 2020-05-02 14:28:46
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