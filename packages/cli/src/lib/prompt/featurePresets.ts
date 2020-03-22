/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-26 13:15:53
 * @LastEditTime : 2020-01-26 14:09:36
 */
import { Service, Inject } from "typedi";
import Pwa from "./pwa";
import Linter from "./linter";
import { inquirer } from "@lartplus/cli-shared-utils";
import TypescriptSupport from "./TypescriptSupport";



@Service()
class FeaturePresets {


    @Inject()
    private pwa!: Pwa

    @Inject()
    private linter!: Linter

    @Inject()
    private typescriptConfig!: TypescriptSupport

    public config(): inquirer.QuestionCollection {

        return {
            name: 'feature',
            type: 'checkbox',
            message: '常用功能',
            choices: [
                this.pwa.choices(),
                this.linter.choices(),
                this.typescriptConfig.choices(),
            ]
        }

    }

}

export default FeaturePresets