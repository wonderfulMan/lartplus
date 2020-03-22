import { CreateFileInterface, ContextInterface } from "../interface/."
import { notice, fs, Juice } from "@lartplus/cli-shared-utils";

/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-18 14:52:27
 * @LastEditTime : 2020-03-21 12:53:59
 */
class CreateFile extends CreateFileInterface {


    protected readonly context: ContextInterface;  // lartplus 运行上下文
    protected readonly fileTypeName: string // 创建文件类型 components or page 
    protected readonly file: string // 模块路径
    protected readonly workDirPath: string // 当前lartplus工作目录
    protected filePath!: string // 当前创建的模块路径
    protected createPath!: string // 创建目标文件全路径

    constructor(
        context: ContextInterface,
        fileTypeName: string,
        file: string
    ) {
        super()
        this.context = context
        this.fileTypeName = fileTypeName
        this.file = file
        this.workDirPath = this.context.cwdPath + '/' + this.context.workDir
    }


    protected getCreateFileConfig(): void {
        const paths = this.file.split('/')
        const pathsLen = paths.length
        const filePath =
            !pathsLen
                ? `${this.fileTypeName}/${this.file}`
                : pathsLen === 1
                    ? `${this.fileTypeName}/${paths[0]}`
                    : `${this.fileTypeName}/${paths.join('/')}`;
        const createPath = `${this.workDirPath}/${filePath}`

        this.filePath = filePath
        this.createPath = createPath
    }

    protected checkRepeatFile(): void {

        this.getCreateFileConfig()
        // 长度为1 直接在当前components读取文件
        const isExists = fs.existsSync(this.createPath)
        if (isExists) {
            notice.error([`当前文件已经存在 -> ${this.filePath}`])
            process.exit(0)
        }

    }

    protected getModuleName(): string {
        const filesArr = this.filePath.split('/')
        return filesArr[filesArr.length - 1]
    }

    protected writeFile(tplPath: string, moduleName: string, suffix: string): void {
        
        this.mkDirByTarget(this.file).catch(err => notice.error([err]))

        const writeDir = `${this.workDirPath}/${this.filePath}`
        const writeFile = `${writeDir}/index.${suffix}`

        const template = fs.readFileSync(tplPath, { encoding: "utf-8" });
        
        (Juice as any).set('strip',false)
        const content = Juice(template, { moduleName })
        
        fs.writeFileSync(writeFile, content)

    }

    protected async mkDirByTarget(dir: string): Promise<void> {
        const arr = dir.split('/')
        let dirs = arr[0]
        const baseDir = `${this.workDirPath}/${this.fileTypeName}`
        for (let i = 0, l = arr.length; i < l; i++) {
            if (!fs.existsSync(`${baseDir}/${dirs}`)) {
                fs.mkdirSync(`${baseDir}/${dirs}`)
            }
            dirs = dirs + '/' + arr[i]
        }
    }

    protected validataPath(): boolean {

        if (!this.file) {
            notice.error([`请输入创建文件名例如 ${this.fileTypeName}/helloWorld`])
            process.exit(0)
        }

        this.checkRepeatFile()
        return true

    }


}

export { CreateFile }