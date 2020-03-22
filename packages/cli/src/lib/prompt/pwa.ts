import { inquirer } from "@lartplus/cli-shared-utils";

class Pwa {

    choices(): inquirer.CheckboxChoiceOptions {
        return {
            name: 'pwa support',
            value: 'pwa',
            short: 'pwa',
        }
    }

}

export default Pwa
