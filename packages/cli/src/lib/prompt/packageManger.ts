/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-26 14:06:30
 * @LastEditTime : 2020-01-26 14:09:16
 */
import { Service } from 'typedi'
import { inquirer } from '@lartplus/cli-shared-utils'


@Service()
class PackageManger {
    config(): inquirer.QuestionCollection {
        return {
            name: 'packageManger',
            type: 'list',
            message: '选择依赖管理',
            choices: [
                {
                    name: 'npm',
                    value: 'npm'
                },
                {
                    name: 'yarn',
                    value: 'yarn'
                }
            ]
        }
    }
}

export default PackageManger