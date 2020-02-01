/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 14:22:01
 * @LastEditTime : 2020-02-01 15:51:55
 */
import events from 'events';

import 'reflect-metadata'
import { Service, Inject } from 'typedi'

import Generator from '@lartplus/cli-generator'
import ResolvePrompt from './prompt/resolvePrompt';

@Service()
export default class Creator extends events.EventEmitter {

    @Inject('projectName')
    private projectName!: string

    @Inject('targetDir')
    private targetDir!: string

    @Inject()
    private resolvePrompt!: ResolvePrompt

    private promptFeature!: PresetsAnswers

    constructor() {
        super()
    }

    async create(): Promise<void> {
        this.emit('create-start')
        this.promptFeature = await this.resolvePrompt.executePrompt()
        const gen = new Generator()
        gen.create(this.targetDir, this.promptFeature)

    }



}