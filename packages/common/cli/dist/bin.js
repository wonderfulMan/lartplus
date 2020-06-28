#!/usr/bin/env node
"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-17 09:52:45
 * @LastEditTime : 2020-03-20 15:40:10
 */
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
function init() {
    var canRun = cli_shared_utils_1.checkNodeVersion("" + require('../package').engines.node);
    if (!canRun)
        process.exit(0);
    var program = new cli_shared_utils_1.commander.Command();
    var cliVersion = "@lartplus/cli " + require('../package').version;
    program
        .version(cliVersion)
        .usage('<command> 选项');
    program
        .command('create <app-name>')
        .description('创建个application')
        .action(function (name, cmd) {
        var create = require('./lib/create')["default"];
        create(name, cmd);
    });
    program.parse(process.argv);
}
init();
