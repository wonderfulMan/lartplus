/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-02-01 18:08:55
 * @LastEditTime : 2020-02-01 18:10:06
 */
import readline from 'readline'

export default function clearConsole(): void {
    if (process.stdout.isTTY) {
        const blank = '\n'.repeat(process.stdout.rows)
        console.log(blank)
        readline.cursorTo(process.stdout, 0, 0)
        readline.clearScreenDown(process.stdout)
    }
}