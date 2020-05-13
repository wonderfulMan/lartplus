/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-24 13:39:09
 * @LastEditTime : 2020-05-13 20:51:13
 */
declare module '@lartplus/cli-config' {


    type PATHS_FUNC = (target: string) => string

    export const LANGUAGE_TYPE: {
        JS: RegExp,
        TS: RegExp,
        VUE: RegExp,
        CSS: RegExp,
        LESS: RegExp,
        STYLUS: RegExp,
        SASS: RegExp,
        SCSS: RegExp,
        POST: RegExp,
        MODULES: RegExp,
        TSX: RegExp,
        ESLINT: RegExp
    }

    export const PATHS: {
        getLartPlusModulePath: PATHS_FUNC,
        getEslintRcPath: PATHS_FUNC,
        getPrettierRcPath: PATHS_FUNC,
        getLartPlusFilePath: PATHS_FUNC,
        getBableConfigFilePath: PATHS_FUNC,
        getProjectPackagePath: PATHS_FUNC,
        getProjectTsconfigFilePath: PATHS_FUNC,
        getPostcssConfigFilePath: PATHS_FUNC
    }
}