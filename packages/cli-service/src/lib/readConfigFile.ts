/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-18 15:39:11
 * @LastEditTime : 2020-03-26 17:20:04
 */
import { CONFIG_FILE_NAME } from "../config"
import { fs, notice, ConfigFileInterface } from "@lartplus/cli-shared-utils"
import { validataConfigFile } from './validateConfigFile'


const cwd = process.cwd();

async function readConfigFile(): Promise<ConfigFileInterface> {

    let filePath = `${cwd}/${CONFIG_FILE_NAME}`;
    const isJSConfig = fs.existsSync(filePath + '.js')
    const isTsConfig = fs.existsSync(filePath + '.ts')
    const isExists = isJSConfig || isTsConfig;

    if (isExists) {

        filePath = `${filePath}.${isJSConfig ? 'js' : 'ts'}`
        const file = await import(filePath)
        const verify = validataConfigFile(file.default)
        if (verify) {
            return file.default
        }
        process.exit(0)

    } else {
        notice.error([`未检测到${CONFIG_FILE_NAME}.js/ts文件`])
        process.exit(0)
    }
}

export { readConfigFile }