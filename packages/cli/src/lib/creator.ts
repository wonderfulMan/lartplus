/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 14:22:01
 * @LastEditTime : 2020-02-01 22:43:42
 */

import 'reflect-metadata'
import { Service, Inject } from 'typedi'

import Generator from '@lartplus/cli-generator'
import ResolvePrompt from './prompt/resolvePrompt';
import { clearConsole, notice } from '@lartplus/cli-shared-utils';

@Service()
export default class Creator {

    @Inject('projectName')
    private projectName!: string

    @Inject('targetDir')
    private targetDir!: string

    @Inject()
    private resolvePrompt!: ResolvePrompt

    private promptFeature!: PresetsAnswers

    private generator!: Generator

    async create(): Promise<void> {

        this.promptFeature = await this.resolvePrompt.executePrompt()

        this.generator = new Generator(this.targetDir, this.projectName, this.promptFeature)

        this.projectCreateEventListener()

        clearConsole()

        this.generator
            .create()


        

    }

    /**
     * @description 项目生成监听generator对象事件
     */
    public projectCreateEventListener(): void {

        this.generator.on('gen_package_start', function () {
            notice.done(['开始生成package.json文件'])
        })

        this.generator.on('gen_package_end', function () {
            notice.done(['开始生成package.json文件成功！'])
        })
    }

}