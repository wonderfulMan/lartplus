#!/usr/bin/env node
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-17 09:52:45
 * @LastEditTime : 2020-01-20 15:45:26
 */

import {
    commander,
} from '@lartplus/cli-shared-utils'



function init(): void {

    const program = new commander.Command()
    const cliVersion = `@lartplus/cli ${require('../package').version}`


    program
        .version(cliVersion)
        .usage('<command> 选项');

    program
        .command('create <app-name>')
        .description('创建一个application')
        .action((name: string, cmd: commander.Option) => {
            const create = require('./lib/create').default
            create(name, cmd)
        })



    program.parse(process.argv)
}

init()