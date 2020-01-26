/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 14:52:09
 * @LastEditTime : 2020-01-26 14:05:53
 */

import path from 'path'
import {
    commander,
    figlet,
    notice,
    validateProjectName,
    inquirer,
    fs
} from "@lartplus/cli-shared-utils";
import { Container } from 'typedi'
import Creator from './creator';

type CreateParams = [string, commander.Option]

function creatCommdanerText(content: string): void {
    const handler = figlet.textSync(
        content,
        {
            font: "Standard"
        }
    )
    notice.normalLogger.call(Object.create(null), handler)
}


async function create(projectName: string, _options?: commander.Option): Promise<void> {

    creatCommdanerText('lartplus/cli')

    const cwd = process.cwd() // 执行cli命令根目录
    const isCurrent = projectName === '.' // 是否在当前目录创建
    const name = isCurrent ? path.relative('../', cwd) : projectName // 获取目录名
    const targetDir = path.resolve(cwd, projectName || '.') // 获取当前目录路径

    validateProjectName(name)

    const hasTargetDir = fs.existsSync(targetDir)

    // 如果目标路径下存在文件夹 并且和项目名相同
    if (hasTargetDir) {
        // 如果是当前目录下创建
        if (isCurrent) {
            const { ok } = await inquirer.prompt({
                name: "ok",
                type: "confirm",
                message: "您确定要在当前文件下创建？"
            })

            if (!ok) {
                return
            }
        } else {
            // 如果不是
            const { action } = await inquirer.prompt({
                name: 'action',
                type: 'list',
                message: "检测到当前目录内部文件夹和项目名一致",
                choices: [
                    { name: "Overwrite", value: "overwrite" },
                    { name: "Cancel", value: "cancel" }
                ]
            })
            if (!action) {
                return
            }
            if (action === 'overwrite') {
                notice.warn(["正在删除当前目录下的所有文件夹"])
                fs.removeSync(targetDir)
            }
        }
    }

    Container.set([
        { id: "projectName", value: name },
        { id: "targetDir", value: targetDir },
    ])

    const creator = Container.get(Creator)
    creator.create()

}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (...args: CreateParams): Promise<void> => create(...args).catch((error: any) => notice.error([error]))