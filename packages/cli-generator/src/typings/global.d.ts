

/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-02-01 15:04:29
 * @LastEditTime : 2020-03-26 19:17:31
 */
declare module '@lartplus/cli-generator' {
    import { PresetsAnswers } from '@lartplus/cli-shared-utils';
    import { EventEmitter } from 'events';

    export default class Generator extends EventEmitter {
        constructor(targetDir: string, projectName: string, answers: PresetsAnswers)
        create(): void
    }

} 