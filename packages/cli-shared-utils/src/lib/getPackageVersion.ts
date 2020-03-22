/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-17 15:08:49
 * @LastEditTime : 2020-03-17 15:52:30
 */
import path from 'path'
function getPackageVersion(pkgName: string,packagePath: string, prefix = '@lartplus'): string {
    return `${prefix}/${pkgName} ${require(path.resolve(packagePath, 'package.json')).version}`
}

export default getPackageVersion