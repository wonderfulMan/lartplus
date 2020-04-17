/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-17 00:28:51
 * @LastEditTime : 2020-04-17 10:33:08
 */
module.exports = (api) => {
    api.cache(true);
    return {
        sourceType: "unambiguous",
        presets: [
            [
                "@babel/preset-env", {
                    "corejs": 3,
                    "modules": false,
                    "useBuiltIns": "usage"
                }
            ],
            "@babel/preset-typescript"
        ],
        plugins: [
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-syntax-dynamic-import",
            [
                "@babel/plugin-proposal-decorators",
                {
                    "legacy": true
                }
            ],
            [
                "@babel/plugin-proposal-class-properties",
                {
                    "loose": true
                }
            ],
            "@vue/transform-vue-jsx"
        ]
    }
}