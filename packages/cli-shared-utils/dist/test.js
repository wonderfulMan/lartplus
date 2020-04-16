/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-16 09:47:40
 * @LastEditTime : 2020-04-16 09:56:55
 */
const path = require('path');
const copyTemplate = require('./index.js').copyTemplate;

const targetDir = path.resolve(__dirname, './src');
const templateDirPath =  path.resolve(__dirname, '../../cli-service-vue/template/typescript/');

console.log(copyTemplate)
copyTemplate(targetDir, templateDirPath);