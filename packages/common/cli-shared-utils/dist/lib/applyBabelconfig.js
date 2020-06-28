"use strict";
exports.__esModule = true;
function applyBabelConfig(babelConfig, setType, presetsOrPlugin, options) {
    if (setType === 'presets' || setType === 'plugins') {
        var setOptions = [presetsOrPlugin];
        if (options) {
            setOptions.push(options);
        }
        babelConfig['sourceType'] = "unambiguous";
        babelConfig[setType].push(setOptions);
    }
    return babelConfig;
}
exports.applyBabelConfig = applyBabelConfig;
