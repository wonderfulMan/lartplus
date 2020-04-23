module.exports = (api) => {
    api.cache(true);
    return {
        sourceType: "unambiguous",
        presets: [["@babel/plugin-proposal-object-rest-spread","@babel/plugin-syntax-dynamic-import"],["@babel/preset-typescript",{"allExtensions":true,"isTSX":true}]],
        plugins: [[["@babel/plugin-proposal-object-rest-spread","@babel/plugin-syntax-dynamic-import",["@babel/plugin-proposal-decorators",{"legacy":true}],["@babel/plugin-proposal-class-properties",{"loose":true}]]],[["@babel/plugin-proposal-object-rest-spread","@babel/plugin-syntax-dynamic-import",["@babel/plugin-proposal-decorators",{"legacy":true}],["@babel/plugin-proposal-class-properties",{"loose":true}]]],["@babel/plugin-proposal-object-rest-spread","@babel/plugin-syntax-dynamic-import"],["@babel/plugin-proposal-object-rest-spread","@babel/plugin-syntax-dynamic-import"],"@vue/transform-vue-jsx"]
    }
}