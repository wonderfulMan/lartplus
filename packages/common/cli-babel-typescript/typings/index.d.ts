/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-16 23:46:48
 * @LastEditTime : 2020-04-17 16:36:42
 */
declare module '@lartplus/cli-babel-vue' {
    import { BabelConfigType } from '@lartplus/cli-shared-utils';
    export function install(babelConfigType: BabelConfigType): BabelConfigType;
}