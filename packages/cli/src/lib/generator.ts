/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-21 10:53:08
 * @LastEditTime : 2020-03-21 12:55:36
 */
import path from 'path'
import {
    fs, notice, Juice, PresetType
} from '@lartplus/cli-shared-utils'

import os from 'os';

const PRESET_FILE_NAME = '.haorc'

export default class Generator {

    private homeDir: string = os.homedir()
    private haorcFilePath: string = path.join(this.homeDir, PRESET_FILE_NAME)


    /**
     * 创建预设模版
     * @param presets 预设配置
     */
    public createPresetTemplate(presets: PresetType): string | void {
        const tplPath = path.resolve(__dirname, '../../template/preset.tpl')
        const presetsTpl = fs.readFileSync(tplPath, { encoding: "utf-8" })
        return JSON.parse(Juice(presetsTpl, presets))
    }

    /**
     * 生成.haorc文件
     * @param presets 预设配置模版字符串
     */
    public createHaorcFile(presets: string): Error | void {
        const hasRepeatFile = fs.readFileSync(this.haorcFilePath)
        if (!hasRepeatFile) {
            notice.warn(['当前目录下已有.haorc'])
            throw new Error('repeat file')
        } else {

            const tplPath = path.resolve(__dirname, '../../template/haorc.tpl')
            const haorcTpl = fs.readFileSync(tplPath, { encoding: "utf-8" })
            const content = JSON.parse(Juice(haorcTpl, presets))

            fs.writeFileSync(content, JSON.stringify(content, null, 2))
        }
    }

    /**
     * 移除。haorc模版文件
     */

    public removeHaorcFile(): void {
        const files = fs.readdirSync(this.homeDir)
        const hasHaorc = files.includes(PRESET_FILE_NAME)
        if (hasHaorc) {
            fs.removeSync(this.haorcFilePath)
            notice.success([`成功删除${PRESET_FILE_NAME}文件`])
        }
    }
}