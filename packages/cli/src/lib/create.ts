import { commander } from "@lartplus/cli-shared-utils";

/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 14:52:09
 * @LastEditTime : 2020-01-20 15:01:05
 */
export default function create(name: string, options: commander.Option): void {
    console.log(name, options)
}