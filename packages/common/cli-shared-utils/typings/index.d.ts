/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 13:35:30
 * @LastEditTime : 2020-05-02 15:11:17
 */
declare namespace NodeJS {
    interface ProcessEnv {
        LARTPLUS_CONTEXT: string;
    }
}

declare module "juicer" {
    const Juice: Function;
    interface Juice {
        set: Function;
        compile: Function;
    }

    export default Juice
}
declare module '@lartplus/cli-shared-utils' {

    import commander from 'commander';
    import figlet from 'figlet';
    import inquirer from 'inquirer';
    import fs from 'fs-extra';
    import Juice from 'juicer';
    import ora from 'ora';
    import chalk from 'chalk';
    import ConfigChain from 'webpack-chain';
    import execa from 'execa';
    import {
        validate,
        ValidationSchema,
        registerSchema
    } from 'class-validator';

    const notice: typeof import('../src/lib/notice').notice;
    const validateProjectName: typeof import('../src/lib/validateProjectName').validateProjectName;
    const exit: typeof import('../src/lib/exit').exit;
    const clearConsole: typeof import('../src/lib/clear').clearConsole;
    const checkNodeVersion: typeof import('../src/lib/checkNodeVersion').checkNodeVersion;
    const getPackageVersion: typeof import('../src/lib/getPackageVersion').getPackageVersion;
    const compileTemplate: (templatePath: string, templateData: unknown, targetPath: string, isRenderJson: boolean) => Promise<void>;
    const copyTemplate: typeof import('../src/lib/copyTemplate').copyTemplate;
    const maybeLoader: typeof import('../src/lib/maybeLoader').maybeLoader;
    const applyBabelConfig: typeof import('../src/lib/applyBabelconfig').applyBabelConfig;

    function hasTypescript(arg: PresetsAnswers): boolean;
    function hasTypescript(arg: ConfigFileInterface): boolean;

    function getFrameworkName(arg: PresetsAnswers): boolean;
    function getFrameworkName(arg: ConfigFileInterface): boolean;


    function getEslintConfig(arg: PresetsAnswers): boolean;
    function getEslintConfig(arg: ConfigFileInterface): boolean;


    function hasEslint(arg: PresetsAnswers): boolean;
    function hasEslint(arg: ConfigFileInterface): boolean;

    export type PresetType = {
        framework: string;
        useConfigFile: boolean;
        plugins: { [key: string]: string };
        stylePreprocessor: string;
        router: boolean;
        status: string;
    }

    export type HaorcType = {
        presets: Array<PresetType>;
    }

    export type ConfigFileEnv = { [key: string]: string }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export type KeyMap = { [key: string]: any };

    export type ConfigFileInterface = {
        framework: "vue" | "react"; // 框架名称
        typescript?: boolean; // 是否开启ts
        env?: { [key: string]: ConfigFileEnv }; // 当前环境
        serverConfig?: import('webpack-dev-server').Configuration;
        styleModules?: boolean; // 是否开启css模块
        cssSouceMap?: boolean; // 是否开启css sourceMap
        cssFileNameWithHash?: boolean; // css文件抽离后是否加上hash指纹
        webpackChain?: (chain: import('webpack-chain')) => void; // webpackChain对象
        linter?: boolean;
    }

    export type PresetsAnswers = {
        feature: Array<"pwa" | "linter" | "typescript">;
        framework: 'vue' | 'react';
        packageManger: 'yarn' | 'npm';
        eslintConfig: 'airbnb' | 'standard' | '';
        createPresetsFile: boolean;
        createFilename: string;
    }

    export interface ContextInterface {
        cwdPath: string;
        workDir: string;
        mode: 'dev' | 'build';
        env: { [key: string]: string };
        configFile: ConfigFileInterface;
    }

    export type BabelConfigType = {
        sourceType: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        presets: Array<any>;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        plugins: Array<any>;
    }

    export {
        execa,
        commander,
        maybeLoader,
        fs,
        inquirer,
        figlet,
        notice,
        validateProjectName,
        exit,
        Juice,
        clearConsole,
        checkNodeVersion,
        getPackageVersion,
        validate,
        ValidationSchema,
        registerSchema,
        compileTemplate,
        copyTemplate,
        ora,
        chalk,
        hasTypescript,
        getFrameworkName,
        getEslintConfig,
        hasEslint,
        applyBabelConfig,
        ConfigChain
    }

}