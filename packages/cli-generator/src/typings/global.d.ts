/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-02-01 15:04:29
 * @LastEditTime : 2020-03-20 17:57:15
 */
declare module '@lartplus/cli-generator' {

    import { EventEmitter } from 'events';

    export default class Generator extends EventEmitter {

        constructor(targetDir: string, projectName: string, answers: PresetsAnswers)
        create(): void
    }

} 