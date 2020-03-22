/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-17 16:01:39
 * @LastEditTime : 2020-03-20 17:51:08
 */

import { CreateFile } from "./createFile";
import { ContextInterface } from "../interface";
import path from 'path'

class CreateComponents extends CreateFile {

    private action: string
    private tmpPath!: string
    private moduleName!: string
    private suffix!: string

    constructor(context: ContextInterface, action: string, file: string) {

        super(context, action, file)
        this.action = action

        const suffix = this.getFileSuffix()
        this.validataPath()
        this.getTmpPathBySuffix(suffix)
    }

    public getFileSuffix(): string {
        return this.context.configFile.framework === 'vue'
            ? 'vue'
            : this.context.configFile.typescript
                ? 'tsx'
                : 'jsx'
    }

    public getTmpPathBySuffix(suffix: string): void {
        const basePath = path.resolve(__dirname, '../../template')
        this.suffix = suffix
        this.tmpPath = `${basePath}/${this.action}.${suffix}.tpl`
    }

    public writeComponentsToTarget(): void {
        this.moduleName = this.getModuleName()
        this.writeFile(this.tmpPath, this.moduleName, this.suffix)
    }

}

export function createComponents(context: ContextInterface, action: string, file: string): void {
    const create = new CreateComponents(context, action, file)
    create.writeComponentsToTarget()
}