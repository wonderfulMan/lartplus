/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-26 13:31:35
 * @LastEditTime : 2020-03-26 17:25:27
 */
import { Service } from 'typedi'
import { inquirer, PresetsAnswers } from "@lartplus/cli-shared-utils";


@Service()
class EslintConfig {

    config(): inquirer.QuestionCollection<PresetsAnswers> {
        return {
            name: 'eslint',
            message: "eslint格式化与配置",
            type: 'list',
            when: (answers): boolean => answers.feature.includes('linter'),
            choices: [
                {
                    name: 'ESLint + Airbnb config + Prettier',
                    value: 'Airbnb'
                },
                {
                    name: 'ESLint + Standard config + Prettier',
                    value: 'Standard'
                },
                {
                    name: 'ESLint + Prettier',
                    value: 'prettier',
                    short: 'Prettier'
                }
            ]
        }
    }

}

export default EslintConfig