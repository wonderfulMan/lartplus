"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-02-01 14:58:57
 * @LastEditTime : 2020-02-01 16:19:10
 */
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var typedi_1 = require("typedi");
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
require("reflect-metadata");
var PKG_TPM_PATH = path_1["default"].resolve(__dirname, '../template/package.tpl');
var Generator = /** @class */ (function () {
    function Generator() {
    }
    /**
     * 初始化生成配置
     */
    Generator.prototype.init = function () {
        return;
    };
    /**
     * 创建文件
     */
    Generator.prototype.create = function (targetDir, answers) {
        var pkgTemplate = fs_1["default"].readFileSync(PKG_TPM_PATH, { encoding: "utf-8" });
        var dps = {
            "@lartplus/cli-service": "^0.0.8-alpha.0"
        };
        var scripts = {
            "dev": "lartplus-cli-service dev",
            "build": "lartplus-cli-service build",
            "lint": "lartplus-cli-service lint"
        };
        console.log(pkgTemplate);
        var content = JSON.parse(cli_shared_utils_1.juicer(pkgTemplate, {
            frameWork: answers.frameWork,
            dps: dps,
            scripts: scripts
        }));
        fs_1["default"].writeFileSync(targetDir + "/package.json", JSON.stringify(content, null, 2));
        return;
    };
    Generator = __decorate([
        typedi_1.Service()
    ], Generator);
    return Generator;
}());
exports["default"] = Generator;
