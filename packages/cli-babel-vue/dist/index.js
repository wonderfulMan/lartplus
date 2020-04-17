"use strict";
exports.__esModule = true;
function install(babelConfig) {
    babelConfig.plugins.push('@vue/transform-vue-jsx');
    return babelConfig;
}
exports.install = install;
;
