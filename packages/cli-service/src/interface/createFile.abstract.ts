
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-18 14:53:14
 * @LastEditTime : 2020-03-19 13:35:03
 */
export abstract class CreateFileInterface {
    // 校验文件
    protected abstract validataPath(path: string): boolean;
}

