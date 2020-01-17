/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-16 20:54:52
 * @LastEditTime : 2020-01-16 23:17:08
 */
import fs from 'fs'
import path from 'path'
import juicer from 'juicer'

const baseDir = path.resolve(__dirname, '../packages/')
const files = fs.readdirSync(baseDir)
const packageTemplatePath = path.resolve(__dirname, '../template/package.tpl')
const baseVersion = '0.0.0'

if (files.length < 0) {
    process.exit(1)
}

files.forEach(pkg => {

    if (pkg.charAt(0) === '.') return

    const pkgPath = path.join(baseDir, pkg)
    const stat = fs.statSync(pkgPath)
    const isDir = stat.isDirectory()

    if (isDir) {

        const pkgFile = fs.readdirSync(pkgPath)
        const hasPackageJson = pkgFile.includes('package.json')

        if (!hasPackageJson) {

            const packageJson = {
                packagename: `@hAo/${pkg}`,
                version: baseVersion,
                description: `构建hAo-cli生态`
            }
            const packageTemplate = fs.readFileSync(packageTemplatePath, { encoding: "utf-8" })
            const content = JSON.parse(juicer(packageTemplate, packageJson))
            const writeFile = `${pkgPath}/package.json`
            
            fs.writeFileSync(writeFile, JSON.stringify(content, null, 2))

        }

    }


})
