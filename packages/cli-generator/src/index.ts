/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-02-01 14:58:57
 * @LastEditTime : 2020-03-26 20:57:08
 */
import { EventEmitter } from 'events'
import execa from 'execa'
import fs from 'fs'
import path from 'path'
import { getBabelConfig, babelConfigType } from '@lartplus/cli-babel';
import { Juice, notice, compileTemplate, PresetsAnswers, ConfigFileInterface } from '@lartplus/cli-shared-utils'
import 'reflect-metadata'

const PKG_TPM_PATH = path.resolve(__dirname, '../template/package.tpl')

const catchErrorAndExit = (err: string): void => {
    notice.error([err]);
    process.exit(0)
}
export default class Generator extends EventEmitter {

    private targetDir: string;
    private projectName: string;
    private answers: PresetsAnswers;
    private babelConfig: babelConfigType;

    constructor(targetDir: string, projectName: string, answers: PresetsAnswers) {
        super()
        this.targetDir = targetDir
        this.projectName = projectName
        this.answers = answers
        this.babelConfig = getBabelConfig(this.answers.framework);

    }

    /**
     * 创建文件
     */
    public async create(): Promise<void> {
        await this.innerCreate()
            .catch(catchErrorAndExit);
    }

    private async innerCreate(): Promise<void> {
        await this.genProjectName();
        await this.genPkgFile();
        await this.resolvePkgDependencies();
        await this.generatorProjectDir();
        await this.generatorProjectConfigFile();
        await this.generatorBabelConfigFile();
    }

    private async genProjectName(): Promise<void> {
        const has = fs.existsSync(this.targetDir);
        if (!has) {
            fs.mkdirSync(this.targetDir);
        } else {
            Promise.reject('请确认目录是否已经存在！')
        }
    }

    /**
     * @description 生成package.json依赖
     * @param targetDir 当前cli生成文件夏商文路径
     * @param answers cli选项
     */
    private async genPkgFile(): Promise<void> {

        this.emit('gen_package_start')

        const pkgTemplate = fs.readFileSync(PKG_TPM_PATH, { encoding: "utf-8" })
        const dependencies = {
            "@lartplus/cli-service": "\"^0.0.15\",",
            "@lartplus/cli-babel": "\"^0.0.15\""
        }
        const scripts = {
            "dev": "\"$(npm bin)/lartplus-service dev\",",
            "build": "\"$(npm bin)/lartplus-service build\",",
            "lint": "\"$(npm bin)/lartplus-service lint\",",
            "create:components": "\"$(npm bin)/lartplus-service new components\",",
            "create:page": "\"$(npm bin)/lartplus-service new page\",",
            "create:model": "\"$(npm bin)/lartplus-service new model\""
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
    private async resolvePkgDependencies(): Promise<void> {

        // test path add project
        const child = execa(this.answers.packageManger, ['install'], {
            cwd: this.targetDir,
            stdio: 'inherit'
        });

        this.emit('resolve_dependencies_start');

        await child.then(() => this.emit('resolve_dependencies_end'))
            .catch((error) => Promise.reject(error));
        
    }

    /**
     * @description 生成项目目录
     */
    private async generatorProjectDir(): Promise<void> {

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
    private async generatorProjectConfigFile(): Promise<void> {

        this.emit('gen_configFile_start')
        const templatePath: string = path.resolve(__dirname, '../template/lartplus.config.tpl')
        const templateData: ConfigFileInterface = {
            framework: this.answers.framework,
            typescript: this.answers.feature.some(it => it === 'typescript'),
        }
        const targetPath = `${this.targetDir}/lartplus.config.js`;
        await compileTemplate(templatePath, templateData, targetPath, false);
        this.emit('gen_configFile_end');
    }

    private async generatorBabelConfigFile(): Promise<void> {

        this.emit('gen_babel_start');
        const { presets, plugins } = this.babelConfig;
        const templatePath: string = path.resolve(__dirname, '../template/babel.config.tpl');
        const templateData = {
            presets: JSON.stringify(presets),
            plugins: JSON.stringify(plugins),
        }
        const targetPath = `${this.targetDir}/babel.config.js`;
        

        
        await compileTemplate(templatePath, templateData, targetPath, false);
        this.emit('gen_babel_end');

    }

    private parseBabelDependencies(): Array<string> {
        const dep: Array<string> = [];
        this.babelConfig.presets.forEach(it => {
            dep.push(
                Array.isArray(it) 
                ? it[0]
                : it
            );
        });
        this.babelConfig.plugins.forEach(it => {
            dep.push(
                Array.isArray(it) 
                ? it[0]
                : it
            );
        })
        return dep;
    }

}