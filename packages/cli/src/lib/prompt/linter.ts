/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-21 18:01:31
 * @LastEditTime : 2020-01-26 13:50:17
 */
import { inquirer } from "@lartplus/cli-shared-utils";

class Linter {

    choices(): inquirer.CheckboxChoiceOptions {
        return {
            name: 'Linter / formatter',
            value: 'linter',
            short: 'linter',
            checked: true,
        }
    }

}

export default Linter
