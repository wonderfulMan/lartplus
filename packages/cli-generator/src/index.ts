/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-02-01 14:58:57
 * @LastEditTime : 2020-03-22 17:50:08
 */
import { EventEmitter } from 'events'
import execa from 'execa'
import fs from 'fs'
import path from 'path'
import { Juice, notice, compileTemplate } from '@lartplus/cli-shared-utils'
import 'reflect-metadata'

const PKG_TPM_PATH = path.resolve(__dirname, '../template/package.tpl')


export default class Generator extends EventEmitter {


    private targetDir: string;
    private projectName: string;
    private answers: PresetsAnswers;


    constructor(targetDir: string, projectName: string, answers: PresetsAnswers) {
        super()
        this.targetDir = targetDir
        this.projectName = projectName
        this.answers = answers
    }

    /**
     * 创建文件
     */
    public async create(): Promise<void> {

        await this.genPkgFile()
            .catch(err => notice.error([err]))

        await this.generatorProjectConfigFile()
            .catch(err => notice.error([err]))

        await this.resolvePkgDependencies()
            .catch(err => notice.error([err]))

        await this.generatorProjectDir()
            .catch(err => notice.error([err]))
    }

    /**
     * @description 生成package.json依赖
     * @param targetDir 当前cli生成文件夏商文路径
     * @param answers cli选项
     */
    public async genPkgFile(): Promise<void> {

        this.emit('gen_package_start')

        const pkgTemplate = fs.readFileSync(PKG_TPM_PATH, { encoding: "utf-8" })
        const dependencies = {
            "@lartplus/cli-service": "\"^0.0.10-alpha.0\""
        }
        const scripts = {
            "dev": "\"$(npm bin)/lartplus-service dev\",",
            "build": "\"$(npm bin)/lartplus-service build\",",
            "lint": "\"$(npm bin)/lartplus-service lint\",",
            "create:components": "\"$(npm bin)/lartplus-service new components\",",
            "create:page": "\"$(npm bin)/lartplus-service new page\""
        }
        const content = JSON.parse(Juice(pkgTemplate, {
            projectName: this.projectName,
            scripts,
            dependencies
        }))
        const packagePath = `${this.targetDir}/package.json`

        // test path add project
        fs.writeFileSync(packagePath, JSON.stringify(content, null, 2))

        this.emit('gen_package_end')
    }

    /**
     * @description 下载依赖
     */
    public async resolvePkgDependencies(): Promise<void> {

        // test path add project
        const child = execa(this.answers.packageManger, ['install'], {
            cwd: this.targetDir,
            stdio: 'inherit'
        })

        this.emit('resolve_dependencies_start')

        await child.then(() => setTimeout(() => this.emit('resolve_dependencies_end'), 5000))
            .catch((error) => Promise.reject(error))
    }

    /**
     * @description 生成项目目录
     */
    public async generatorProjectDir(): Promise<void> {

        const srcPath = this.targetDir + '/src'
        const pagePath = srcPath + '/page'
        const routerPath = srcPath + '/router'
        const componentPath = srcPath + '/components'

        const dirPaths = [srcPath, pagePath, routerPath, componentPath]

        this.emit('gen_dir_start')

        for (const dirPath of dirPaths) {
            await fs.mkdirSync(dirPath)
        }

        this.emit('gen_dir_end')

    }

    /**
     * @description 生成配置文件到目标项目根目录
     */
    public async generatorProjectConfigFile(): Promise<void> {
        this.emit('gen_configFile_start')
        const templatePath: string = path.resolve(__dirname, '../template/lartplus.config.tpl')
        const templateData: ConfigFileInterface = {
            framework: this.answers.framework,
            typescript: this.answers.feature.some(it => it === 'typescript'),
        }
        const targetPath = `${process.cwd()}/lartplus.config.js`
        await compileTemplate(templatePath, templateData, targetPath, false)
        this.emit('gen_configFile_end')
    }

}