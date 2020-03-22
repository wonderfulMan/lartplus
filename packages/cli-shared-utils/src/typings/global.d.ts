/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 13:35:30
 * @LastEditTime : 2020-03-22 17:01:09
 */


declare module "juicer" {
    const Juice: Function;
    interface Juice {
        set: Function;
        compile: Function;
    }

    export default Juice
}

type PresetType = {
    framework: string;
    useConfigFile: boolean;
    plugins: { [key: string]: string };
    stylePreprocessor: string;
    router: boolean;
    status: string;
}

type HaorcType = {
    presets: Array<PresetType>;
}
type ConfigFileInterface = {
    framework: "vue" | "react";
    typescript?: boolean;
}
type PresetsAnswers = {
    feature: Array<"pwa" | "linter" | "typescript">;
    framework: 'vue' | 'react';
    packageManger: 'yarn' | 'npm';
    createPresetsFile: boolean;
    createFilename: string;
}
declare module '@lartplus/cli-shared-utils' {

    import commander from 'commander'
    import figlet from 'figlet'
    import inquirer from 'inquirer'
    import fs from 'fs-extra'
    import Juice from 'juicer'
    import { validate, ValidationSchema, registerSchema } from 'class-validator';
    import ora from 'ora'
    import chalk from 'chalk'
    const notice: typeof import('../lib/notice').default
    const validateProjectName: typeof import('../lib/validateProjectName').default
    const exit: typeof import('../lib/exit').default
    const clearConsole: typeof import('../lib/clear').default
    const checkNodeVersion: typeof import('../lib/checkNodeVersion').default
    const getPackageVersion: typeof import('../lib/getPackageVersion').default
    const compileTemplate: (templatePath: string, templateData: unknown, targetPath: string, isRenderJson: boolean) => Promise<void>

    export {
        commander,
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
        ora,
        chalk
    }

}