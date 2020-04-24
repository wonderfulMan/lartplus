


/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-01 21:46:08
 * @LastEditTime : 2020-04-24 14:36:13
 */
declare module '@lartplus/cli-service-vue' {
    import { ContextInterface, ConfigChain } from "@lartplus/cli-shared-utils";
    export class CreateVueConfig {
        private context: ContextInterface;
        private chain: ConfigChain;
        constructor(context: ContextInterface, chain: ConfigChain)
        public buildAll(): void;
    }

}