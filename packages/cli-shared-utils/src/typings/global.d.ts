/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 13:35:30
 * @LastEditTime : 2020-01-21 11:21:09
 */


declare module "juicer" {
    const juicer: Function

    export = juicer
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