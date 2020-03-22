#!/usr/bin/env node
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-17 15:05:30
 * @LastEditTime : 2020-03-20 14:55:16
 */
import {
    commander,
    getPackageVersion,
    notice
} from '@lartplus/cli-shared-utils'

import { readConfigFile } from './lib/readConfigFile'
import { createComponents } from './lib/createComponents'
async function initSevice(): Promise<void> {

    const program = new commander.Command()

    const cliVersion = getPackageVersion('cli-service', __dirname + '/../')


    const context = await readConfigFile()

    process.env.LARTPLUS_CONTEXT = JSON.stringify({
        ...context,
        cwdPath: process.cwd(),
        workDir: 'src',
        typescript: true
    })

    const contextJson = JSON.parse(process.env.LARTPLUS_CONTEXT)

    program.version(cliVersion)
        .usage('<command> 选项');

    program
        .command('new <option> [file]')
        .description('创建例如 components components/xxxx')
        .action((action: string, filePath: string) => {
            switch (action) {
                case 'components':
                    createComponents(contextJson, action, filePath)
                    break;
                case 'page':
                    createComponents(contextJson, action, filePath)
                    break;
                default:
                    notice.error(['暂不支持components/page以外的文件创建'])
                    break;
            }
            // create(name)
        })

    program.parse(process.argv)

}

initSevice()