/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-11 09:13:41
 * @LastEditTime : 2020-03-20 15:40:02
 */
import notice from './notice'
export default function checkNodeVersion(projectVersion: string): boolean {
    const requireNodeVersion = projectVersion
        .replace(/\>=/, '')

    const currentNodeVersion = process.versions.node

    const v1 = +requireNodeVersion.split('.')[0]
    const v2 = +currentNodeVersion.split('.')[0]
    console.log(v1, v2)

    7 <= 10

    if (v2 <= v1) {
        notice.error([`node版本必须大于${requireNodeVersion}以上`])
        return false
    }
    return true
}