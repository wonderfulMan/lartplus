/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 15:52:10
 * @LastEditTime : 2020-02-01 18:14:17
 */
import validate from 'validate-npm-package-name'

import notice from './notice'
import exit from './exit'
export default function validateProjectName(name: string): void {
    const ret = validate(name)
    if (!ret.validForNewPackages) {
        notice.error([`无效的命名，请遵循npm包命名规范 -- ${name}`])
        ret.errors && notice.error(ret.errors)
        ret.warnings && notice.warn(ret.warnings)
        exit(0)
    }
}