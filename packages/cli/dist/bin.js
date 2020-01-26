#!/usr/bin/env node
"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-17 09:52:45
 * @LastEditTime : 2020-01-20 15:45:26
 */
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
function init() {
    var program = new cli_shared_utils_1.commander.Command();
    var cliVersion = "@lartplus/cli " + require('../package').version;
    program
        .version(cliVersion)
        .usage('<command> 选项');
    program
        .command('create <app-name>')
        .description('创建一个application')
        .action(function (name, cmd) {
        var create = require('./lib/create')["default"];
        create(name, cmd);
    });
    program.parse(process.argv);
}
init();
