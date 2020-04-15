module.exports = (api) => {
    api.cache(true);
    return {
        presets: [["@babel/preset-env",{"corejs":3,"modules":false,"useBuiltIns":"usage"}],"@babel/preset-typescript"],
        plugins: ["@babel/plugin-proposal-object-rest-spread","@babel/plugin-syntax-dynamic-import","@babel/plugin-proposal-class-properties",["@babel/plugin-proposal-decorators",{"legacy":true}]]
    }
}