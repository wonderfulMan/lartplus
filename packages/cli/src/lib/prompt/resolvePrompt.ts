
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-21 13:49:53
 * @LastEditTime : 2020-03-26 17:25:38
 */

import { Service, Inject } from "typedi";
import { inquirer, PresetsAnswers } from "@lartplus/cli-shared-utils";
import FrameWorkPrompt from "./frameWork";
import FeaturePresets from "./featurePresets";
import EslintConfig from "./eslintConfig";
import PackageManger from "./packageManger";
import createPresetsFile from "./createPresetsFile";
import CreateFilename from "./createFilename";

@Service()
export class ResolvePrompt {

    @Inject()
    private framwWork!: FrameWorkPrompt

    @Inject()
    private featurePresets!: FeaturePresets

    @Inject()
    private eslintConfig!: EslintConfig

    @Inject()
    private packageManger!: PackageManger

    @Inject()
    private createPresetsFile!: createPresetsFile

    @Inject()
    private createFilename!: CreateFilename

    private getAllPresetsApi(): inquirer.QuestionCollection {
        return [
            this.framwWork,
            this.featurePresets,
            this.eslintConfig,
            this.packageManger,
            this.createPresetsFile,
            this.createFilename
        ].map(api => api.config())
    }

    public async executePrompt(): Promise<PresetsAnswers> {
        const answers = await inquirer.prompt<PresetsAnswers>(this.getAllPresetsApi())
        return answers
    }
}

export default ResolvePrompt