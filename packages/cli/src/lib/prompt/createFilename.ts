/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-26 14:12:44
 * @LastEditTime : 2020-03-26 17:25:19
 */
import { Service } from "typedi";
import { inquirer, PresetsAnswers } from "@lartplus/cli-shared-utils";

@Service()
class CreateFilename {

    config(): inquirer.InputQuestion<PresetsAnswers> {
        return {
            name: "createFilename",
            message: '保存配置文件名',
            when: (answers): boolean => answers.createPresetsFile,
            type: 'input',
            validate: function (this: { async: () => (...arg: any[]) => {} }, input: string): boolean {
                const done = this.async()
                if (!input) {
                    done('文件名不能为空')
                }
                if (input.length > 10 || input.length < 1) {
                    done('文件名不能超过10个字符，小于1个字符')
                }
                done(null, true)
                return true
            }
        }
    }

}

export default CreateFilename