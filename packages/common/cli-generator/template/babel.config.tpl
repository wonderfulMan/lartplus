module.exports = (api) => {
    api.cache(true);
    return {
        sourceType: "${sourceType}",
        presets: $${presets},
        plugins: $${plugins}
    }
}