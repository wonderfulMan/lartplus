/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-16 20:54:52
 * @LastEditTime : 2020-03-10 17:35:14
 */
import fs from 'fs'
import path from 'path'
import juicer from 'juicer'

const baseDir = path.resolve(__dirname, '../packages/')
const files = fs.readdirSync(baseDir)
const packageTemplatePath = path.resolve(__dirname, '../template/package.tpl')
const tsconfigTemplatePath = path.resolve(__dirname, '../template/tsconfig.tpl')
const baseVersion = '0.0.0'

function createFileExcutor(pkgPath: string): Function {
    return (tplPath: string, filename: string, tplData?: object): void => {
        const template = fs.readFileSync(tplPath, { encoding: "utf-8" })
        const content = JSON.parse(juicer(template, tplData || {}))
        const writeFile = `${pkgPath}/${filename}`
        fs.writeFileSync(writeFile, JSON.stringify(content, null, 2))
    }
}

if (files.length < 0) {
    process.exit(1)
}
files.forEach(pkg => {
    if (pkg.charAt(0) !== '.') {
        const pkgPath = path.join(baseDir, pkg)
        const stat = fs.statSync(pkgPath)
        const isDir = stat.isDirectory()

        if (isDir) {
            const pkgFile = fs.readdirSync(pkgPath)
            const hasPackageJson = pkgFile.includes('package.json')
            const hasTsConfig = pkg.includes('tsconfig.json')
            const createFileInsertPkg = createFileExcutor(pkgPath)
        
            if (!hasPackageJson) {
                const packageJson = {
                    packagename: `@lartplus/${pkg}`,
                    version: baseVersion,
                    description: `构建lartplus-cli生态`
                }
                createFileInsertPkg(packageTemplatePath, 'package.json', packageJson)
            }

            if (!hasTsConfig) {
                createFileInsertPkg(tsconfigTemplatePath, 'tsconfig.json')
            }

        }
    }
})
