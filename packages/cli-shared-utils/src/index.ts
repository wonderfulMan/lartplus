/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 13:23:02
 * @LastEditTime : 2020-03-22 17:00:54
 */
import fs from 'fs-extra'
import figlet from 'figlet'
import commander from 'commander'
import inquirer from 'inquirer'
import Juice from 'juicer'
import notice from './lib/notice'
import validateProjectName from './lib/validateProjectName'
import clearConsole from './lib/clear'
import checkNodeVersion from './lib/checkNodeVersion'
import getPackageVersion from './lib/getPackageVersion'
import { ValidationSchema, registerSchema, validate } from 'class-validator'
import { compileTemplate } from './lib/compileTemplate'
import ora from 'ora'
import chalk from 'chalk'
export {
    clearConsole,
    notice,
    figlet,
    commander,
    validateProjectName,
    inquirer,
    fs,
    Juice,
    checkNodeVersion,
    getPackageVersion,
    validate,
    ValidationSchema,
    registerSchema,
    compileTemplate,
    ora,
    chalk
}