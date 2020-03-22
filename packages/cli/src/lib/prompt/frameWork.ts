/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-21 13:27:38
 * @LastEditTime : 2020-03-20 15:54:52
 */


import { Service } from 'typedi';
import {
    inquirer
} from '@lartplus/cli-shared-utils'


@Service()
class FrameWorkPrompt {

    config(): inquirer.QuestionCollection {
        return {
            name: 'framework',
            message: '选择开发框架:',
            type: 'list',
            choices: [
                {
                    name: 'Vue',
                    value: 'vue',
                },
                {
                    name: 'React',
                    value: 'react'
                }
            ]
        }
    }

}

export default FrameWorkPrompt