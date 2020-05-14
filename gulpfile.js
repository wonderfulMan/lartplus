/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-05-14 14:49:11
 * @LastEditTime : 2020-05-14 16:45:29
 */
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const javascriptObfuscator = require('gulp-javascript-obfuscator');

function getUglifyJsLists() {
    const basePath = path.resolve(__dirname, './packages');
    const originDirs = [`common`, `vue`, `react`];
    const cliDirs = [];
    originDirs
        .map(dir => `${basePath}/${dir}`)
        .forEach((dir, index) => {
            const childs = fs.readdirSync(dir)
            childs.forEach(child => {
                const suffix = `${basePath}/${originDirs[index]}/${child}/dist`
                cliDirs.push({
                    src: `${suffix}/**/*.js`,
                    dest: suffix,
                    task: child
                })
            })
        })

    return cliDirs
}
gulp.task("build", async function () {
    const tasksList = getUglifyJsLists();

    for (let i = 0, l = tasksList.length; i < l; i++) {
        await gulp
            .src(tasksList[i].src)
            .pipe(uglify({
                mangle: true,
                compress: true,
            }))
            .pipe(javascriptObfuscator())
            .pipe(
                gulp.dest(tasksList[i].dest)
            );
    }
})