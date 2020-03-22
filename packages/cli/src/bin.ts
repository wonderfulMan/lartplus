#!/usr/bin/env node
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-17 09:52:45
 * @LastEditTime : 2020-03-20 15:40:10
 */

import {
    commander,
    checkNodeVersion
} from '@lartplus/cli-shared-utils'


function init(): void {

    const canRun = checkNodeVersion(`${require('../package').engines.node}`)
    
    if (!canRun) process.exit(0);

    const program = new commander.Command()
    const cliVersion = `@lartplus/cli ${require('../package').version}`

    program
        .version(cliVersion)
        .usage('<command> 选项');

    program
        .command('create <app-name>')
        .description('创建个application')
        .action((name: string, cmd: commander.Option) => {
            const create = require('./lib/create').default
            create(name, cmd)
        })

    program.parse(process.argv)
}

init()