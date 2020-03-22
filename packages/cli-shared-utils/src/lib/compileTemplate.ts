/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-20 17:03:05
 * @LastEditTime : 2020-03-22 16:53:19
 */
import fs from 'fs-extra'
import juicer from 'juicer'
import notice from './notice'


export async function compileTemplate(
    templatePath: string,
    templateData: unknown,
    targetPath: string,
    isRenderJson: boolean,
): Promise<void> {
    const template = fs.readFileSync(templatePath, { encoding: "utf-8" });
    (juicer as any).set('strip', false);
    const content = juicer(template, templateData || {});
    try {
        fs.writeFileSync(
            targetPath,
            isRenderJson ? JSON.stringify(JSON.parse(content), null, 2) : content
        );
    } catch (error) {
        notice.error([error]);
        process.exit(0);
    }
}