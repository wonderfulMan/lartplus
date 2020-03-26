/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-18 15:57:41
 * @LastEditTime : 2020-03-20 17:50:56
 */
import {
    validate,
    ValidationSchema,
    registerSchema,
    notice,
    ConfigFileInterface
} from '@lartplus/cli-shared-utils'


export async function validataConfigFile(file: ConfigFileInterface): Promise<boolean> {

    let flag = false
    const schema: ValidationSchema = {
        name: 'fileSchema',
        properties: {
            framework: [{
                type: 'isNotEmpty'
            }, {
                type: 'isIn',
                constraints: [['vue', 'react']]
            }]
        }
    }
    registerSchema(schema)
    try {
        const errors = await validate(schema.name, file)
        const hasError = errors.length
        if (hasError) {
            const constraints = errors[0].constraints
            Object.entries(constraints).map(([key, value]) => {
                notice.error([`lartplus.config.js error: ${value}`])
                process.exit(0)
            })
        }
        flag = true
    } catch (err) {
        notice.error(['校验异常'])
        process.exit(0)
    }
    return flag
}