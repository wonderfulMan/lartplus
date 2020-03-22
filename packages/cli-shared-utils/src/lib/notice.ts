/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 15:57:42
 * @LastEditTime : 2020-03-18 18:33:05
 */
import chalk from 'chalk'


const warnLogger = console.warn
const normalLogger = console.log
const errorLogger = console.error
const clear = console.clear

const notice = {

    warn(strs: string[]): void {
        warnLogger(chalk.black.bgYellow(` WARN: `) + chalk.whiteBright(` ${strs.map(it => it).join('/n')}`))
    },

    error(strs: string[]): void {
        errorLogger(chalk.black.bgRed(` ERROR: `) + chalk.whiteBright(` ${strs.map(it => it).join('/n')}`))
    },

    success(strs: string[]): void {
        normalLogger(chalk.black.bgGreen(` SUCCESS: `) + chalk.whiteBright(` ${strs.map(it => it).join('/n')}`))
    },

    done(strs: string[]): void {
        normalLogger(chalk.black.bgGreen(` DONE: `) + chalk.whiteBright(` ${strs.map(it => it).join('/n')}`))
    }
}

export default {
    ...notice,
    warnLogger,
    normalLogger,
    errorLogger,
    clear
}