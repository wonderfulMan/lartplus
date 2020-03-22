/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-26 14:12:44
 * @LastEditTime : 2020-01-26 14:31:38
 */
import { Service } from "typedi";
import { inquirer } from "@lartplus/cli-shared-utils";

@Service()
class CreatePresetsFile {

    config(): inquirer.QuestionCollection<PresetsAnswers> {
        return {
            name: "createPresetsFile",
            message: '是否保存本次配置',
            type: "confirm",
        }
    }

}

export default CreatePresetsFile