/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-24 13:39:09
 * @LastEditTime : 2020-05-14 14:19:04
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
        ESLINT: RegExp,
        IMAGE: RegExp,
        SVG: RegExp,
        MEDIA: RegExp,
        FONT: RegExp
    }

    export const PATHS: {
        getLartPlusModulePath: PATHS_FUNC,
        getEslintRcPath: PATHS_FUNC,
        getPrettierRcPath: PATHS_FUNC,
        getLartPlusFilePath: PATHS_FUNC,
        getBableConfigFilePath: PATHS_FUNC,
        getProjectPackagePath: PATHS_FUNC,
        getProjectTsconfigFilePath: PATHS_FUNC,
        getPostcssConfigFilePath: PATHS_FUNC,
        getLartPlusTemplatePath: PATHS_FUNC,
        getLartPlusTsconfigTemplatePath: PATHS_FUNC,
        getLartPlusBabelTemplatePath: PATHS_FUNC
    }
}