"use strict";
exports.__esModule = true;
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
function genProjectName(generator) {
    var has = cli_shared_utils_1.fs.existsSync(generator.targetDir);
    if (!has) {
        cli_shared_utils_1.fs.mkdirSync(generator.targetDir);
    }
    else {
        Promise.reject('请确认目录是否已经存在！');
    }
}
exports.genProjectName = genProjectName;
