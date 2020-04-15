module.exports = (api) => {
    api.cache(true);
    return {
        sourceType: unambiguous,
        presets: [["@babel/preset-env",{"corejs":3,"modules":false,"useBuiltIns":"usage"}],"@babel/prest-react","@babel/preset-typescript"],
        plugins: ["@babel/plugin-proposal-object-rest-spread","@babel/plugin-syntax-dynamic-import",["@babel/plugin-proposal-decorators",{"legacy":true}],["@babel/plugin-proposal-class-properties",{"loose":true}]]
    }
}