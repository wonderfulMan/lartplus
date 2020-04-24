"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-16 20:54:52
 * @LastEditTime : 2020-04-24 10:23:54
 */
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var juicer_1 = __importDefault(require("juicer"));
var baseDir = path_1["default"].resolve(__dirname, '../packages/');
var files = fs_1["default"].readdirSync(baseDir);
var packageTemplatePath = path_1["default"].resolve(__dirname, '../template/package.tpl');
var tsconfigTemplatePath = path_1["default"].resolve(__dirname, '../template/tsconfig.tpl');
var baseVersion = '0.0.0';
function createFileExcutor(pkgPath) {
    return function (tplPath, filename, tplData) {
        var template = fs_1["default"].readFileSync(tplPath, { encoding: "utf-8" });
        var content = JSON.parse(juicer_1["default"](template, tplData || {}));
        var writeFile = pkgPath + "/" + filename;
        fs_1["default"].writeFileSync(writeFile, JSON.stringify(content, null, 2));
    };
}
function mapFilesByTarget(baseDir, file, target) {
    var basePath = path_1["default"].join(baseDir, file);
    var findDir = target.find(function (it) { return file.includes(it); });
    return findDir
        ? fs_1["default"].readdirSync(basePath).map(function (it) { return findDir + "/" + it; })
        : [];
}
function reduceFiles(total, curV) {
    Array.isArray(curV)
        ? total.push.apply(total, curV) : total.push(curV);
    return total;
}
if (files.length < 0) {
    process.exit(1);
}
var packageDir = files
    .map(function (file) { return mapFilesByTarget(baseDir, file, ['react', 'vue', 'common']); })
    .reduce(function (total, curV) { return reduceFiles(total, curV); }, []);
packageDir.forEach(function (pkg) {
    if (pkg.charAt(0) !== '.') {
        var pkgPath = path_1["default"].join(baseDir, pkg);
        var stat = fs_1["default"].statSync(pkgPath);
        var isDir = stat.isDirectory();
        if (isDir) {
            var pkgFile = fs_1["default"].readdirSync(pkgPath);
            var hasPackageJson = pkgFile.includes('package.json');
            var hasTsConfig = pkg.includes('tsconfig.json');
            var createFileInsertPkg = createFileExcutor(pkgPath);
            if (!hasPackageJson) {
                var packageJson = {
                    packagename: "@lartplus/" + pkg.split('/')[1],
                    version: baseVersion,
                    description: "\u6784\u5EFAlartplus-cli\u751F\u6001"
                };
                createFileInsertPkg(packageTemplatePath, 'package.json', packageJson);
            }
            if (!hasTsConfig) {
                createFileInsertPkg(tsconfigTemplatePath, 'tsconfig.json');
            }
        }
    }
});
