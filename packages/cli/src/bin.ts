#!/usr/bin/env node
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-17 09:52:45
 * @LastEditTime : 2020-01-20 15:01:33
 */

import {
    commander,
    figlet
} from '@lartplus/cli-shared-utils'

function creatLogo(): void {
    figlet('welcome', function (err, data) {
        if (!err) {
            console.log(data)
        }
    });
    figlet(" lartplue/cli", function (err, data) {
        if (!err) {
            console.log(data)
        }
    })
}


function init(): void {

    const program = new commander.Command()
    const cliVersion = `@lartplus/cli ${require('../package').version}`

    creatLogo()

    program
        .version(cliVersion)
        .usage('<command> 选项');

    program
        .command('create <app-name>')
        .description('创建一个application')
        .action((name: string, cmd: commander.Option) => {
            // const create = require('./lib/create').default
            // create(name, cmd)
        })



    program.parse(process.argv)
}

init()