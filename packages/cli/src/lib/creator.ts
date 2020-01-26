/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 14:22:01
 * @LastEditTime : 2020-01-26 13:02:32
 */
import events from 'events';

import 'reflect-metadata'
import { Service, Inject } from 'typedi'
import ResolvePrompt from './prompt/resolvePrompt';

@Service()
export default class Creator extends events.EventEmitter {

    @Inject('projectName') 
    private projectName!: string

    @Inject('targetDir') 
    private targetDir!: string

    @Inject()
    private resolvePrompt!: ResolvePrompt

    constructor() {
        super()


    }

    create(): void {
        this.emit('create-start')

        this.resolvePrompt.executePrompt()

    }

    

}