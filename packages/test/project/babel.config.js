module.exports = (babel) => {
    return {
        presets: [["@babel/preset-env",{"corejs":3,"useBuiltIns":"usage"}]],
        plugins: ["@babel/plugin-proposal-object-rest-spread","@babel/plugin-syntax-dynamic-import","@babel/plugin-proposal-class-properties"]
    }
}