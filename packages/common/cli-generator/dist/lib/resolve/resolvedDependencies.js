"use strict";
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-28 17:22:08
 * @LastEditTime : 2020-05-13 18:02:08
 */
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var utils_1 = require("../../utils");
var resolvedLartplusCliVersion_1 = require("./resolvedLartplusCliVersion");
var LARTPLUS_VERSION_STR = resolvedLartplusCliVersion_1.resolvedLartplusCliVersion();
var DEV_DEPENDENCIES = {
    base: {
        "@lartplus/cli-service": LARTPLUS_VERSION_STR,
        "@lartplus/cli-babel": LARTPLUS_VERSION_STR
    },
    vue: {
        "@lartplus/cli-generator-vue": LARTPLUS_VERSION_STR,
        "@lartplus/cli-service-vue": LARTPLUS_VERSION_STR,
        "@lartplus/cli-babel-vue": LARTPLUS_VERSION_STR,
        "@lartplus/cli-prettier-vue": LARTPLUS_VERSION_STR
    },
    react: {
        "@lartplus/cli-generator-react": LARTPLUS_VERSION_STR,
        "@lartplus/cli-service-react": LARTPLUS_VERSION_STR,
        "@lartplus/cli-babel-react": LARTPLUS_VERSION_STR
    },
    typescript: {
        "typescript": "^3.7.5",
        "@lartplus/cli-babel-typescript": LARTPLUS_VERSION_STR
    },
    vueEslint: {
        "@lartplus/cli-eslint-vue": LARTPLUS_VERSION_STR
    },
    reactEslint: {
        "@lartplus/cli-eslint-react": LARTPLUS_VERSION_STR
    },
    mobile: {
        "@lartplus/cli-postcss": LARTPLUS_VERSION_STR
    }
};
var DEPENDENCIES = {
    vue: {
        "vue": "^2.6.11",
        "vue-router": "^3.1.6"
    },
    react: {
        "react": "\"^16.13.1\",",
        "@hot-loader/react-dom": "\"^16.10.2\",",
        "react-router-dom": "\"^5.1.2\""
    }
};
exports.resolvedDependencies = function (answers, targetPath) {
    var framework = utils_1.getFrameworkName(answers);
    var isTypescript = utils_1.hasTypescript(answers);
    var isEslint = utils_1.hasEslint(answers);
    var isMobile = cli_shared_utils_1.hasMobile(answers);
    // 开发依赖
    var devDependencies = Object.assign({}, DEV_DEPENDENCIES.base, DEV_DEPENDENCIES[framework]);
    // 上线依赖
    var dependencies = Object.assign({}, DEPENDENCIES[framework]);
    // typescirpt
    if (isTypescript) {
        Object.assign(devDependencies, DEV_DEPENDENCIES.typescript);
        Object.assign(dependencies, {
            "vue-class-component": "^7.2.3",
            "vue-property-decorator": "^8.3.0"
        });
    }
    ;
    // eslint
    if (isEslint) {
        Object.assign(devDependencies, framework === 'vue'
            ? DEV_DEPENDENCIES.vueEslint
            : DEV_DEPENDENCIES.reactEslint);
    }
    if (isMobile) {
        Object.assign(devDependencies, DEV_DEPENDENCIES.mobile);
    }
    return { dependencies: dependencies, devDependencies: devDependencies };
};
