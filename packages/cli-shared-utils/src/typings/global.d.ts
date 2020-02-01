/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 13:35:30
 * @LastEditTime : 2020-02-01 15:25:11
 */


declare module "juicer" {
    const juicer: Function

    export = juicer
}
type PresetType = {
    frameWork: string;
    useConfigFile: boolean;
    plugins: { [key: string]: string };
    stylePreprocessor: string;
    router: boolean;
    status: string;
}

type HaorcType = {
    presets: Array<PresetType>;
}

type PresetsAnswers = {
    feature: "pwa" | "linter" | "typescript";
    frameWork: 'vue' | 'react';
    packageManger: 'yarn' | 'npm';
    createPresetsFile: boolean;
    createFilename: string;
}
declare module '@lartplus/cli-shared-utils' {

    import commander from 'commander'
    import figlet from 'figlet'
    import inquirer from 'inquirer'
    import fs from 'fs-extra'
    import juicer from 'juicer'
    
    const notice: typeof import('../lib/notice').default
    const validateProjectName: typeof import('../lib/validateProjectName').default
    const exit: typeof import('../lib/exit').default

    export {
        commander,
        fs,
        inquirer,
        figlet,
        notice,
        validateProjectName,
        exit,
        juicer
    }

}