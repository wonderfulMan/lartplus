"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-21 10:53:08
 * @LastEditTime : 2020-01-21 13:26:40
 */
var path_1 = __importDefault(require("path"));
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var os_1 = __importDefault(require("os"));
var PRESET_FILE_NAME = '.haorc';
var Generator = /** @class */ (function () {
    function Generator() {
        this.homeDir = os_1["default"].homedir();
        this.haorcFilePath = path_1["default"].join(this.homeDir, PRESET_FILE_NAME);
    }
    /**
     * 创建预设模版
     * @param presets 预设配置
     */
    Generator.prototype.createPresetTemplate = function (presets) {
        var tplPath = path_1["default"].resolve(__dirname, '../../template/preset.tpl');
        var presetsTpl = cli_shared_utils_1.fs.readFileSync(tplPath, { encoding: "utf-8" });
        return JSON.parse(cli_shared_utils_1.juicer(presetsTpl, presets));
    };
    /**
     * 生成.haorc文件
     * @param presets 预设配置模版字符串
     */
    Generator.prototype.createHaorcFile = function (presets) {
        var hasRepeatFile = cli_shared_utils_1.fs.readFileSync(this.haorcFilePath);
        if (!hasRepeatFile) {
            cli_shared_utils_1.notice.warn(['当前目录下已有.haorc']);
            throw new Error('repeat file');
        }
        else {
            var tplPath = path_1["default"].resolve(__dirname, '../../template/haorc.tpl');
            var haorcTpl = cli_shared_utils_1.fs.readFileSync(tplPath, { encoding: "utf-8" });
            var content = JSON.parse(cli_shared_utils_1.juicer(haorcTpl, presets));
            cli_shared_utils_1.fs.writeFileSync(content, JSON.stringify(content, null, 2));
        }
    };
    /**
     * 移除。haorc模版文件
     */
    Generator.prototype.removeHaorcFile = function () {
        var files = cli_shared_utils_1.fs.readdirSync(this.homeDir);
        var hasHaorc = files.includes(PRESET_FILE_NAME);
        if (hasHaorc) {
            cli_shared_utils_1.fs.removeSync(this.haorcFilePath);
            cli_shared_utils_1.notice.success(["\u6210\u529F\u5220\u9664" + PRESET_FILE_NAME + "\u6587\u4EF6"]);
        }
    };
    return Generator;
}());
exports["default"] = Generator;
