import { Service } from "typedi";
import { inquirer } from "@lartplus/cli-shared-utils";

/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-26 14:01:21
 * @LastEditTime : 2020-01-26 14:04:49
 */
@Service()
class TypescriptSupport {

    choices(): inquirer.CheckboxChoiceOptions {
        return {
            name: 'typescript',
            value: 'typescript',
            short: 'typescript',
        }
    }
}

export default TypescriptSupport