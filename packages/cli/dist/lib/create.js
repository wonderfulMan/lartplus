"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 14:52:09
 * @LastEditTime : 2020-01-26 15:34:12
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = __importDefault(require("path"));
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var typedi_1 = require("typedi");
var creator_1 = __importDefault(require("./creator"));
function creatCommdanerText(content) {
    var handler = cli_shared_utils_1.figlet.textSync(content, {
        font: "Standard"
    });
    cli_shared_utils_1.notice.normalLogger.call(Object.create(null), handler);
}
function create(projectName, _options) {
    return __awaiter(this, void 0, void 0, function () {
        var cwd, isCurrent, name, targetDir, hasTargetDir, ok, action, creator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    creatCommdanerText('lartplus/cli');
                    cwd = process.cwd() // 执行cli命令根目录
                    ;
                    isCurrent = projectName === '.' // 是否在当前目录创建
                    ;
                    name = isCurrent ? path_1["default"].relative('../', cwd) : projectName // 获取目录名
                    ;
                    targetDir = path_1["default"].resolve(cwd, projectName || '.') // 获取当前目录路径
                    ;
                    cli_shared_utils_1.validateProjectName(name);
                    hasTargetDir = cli_shared_utils_1.fs.existsSync(targetDir);
                    if (!hasTargetDir) return [3 /*break*/, 4];
                    if (!isCurrent) return [3 /*break*/, 2];
                    return [4 /*yield*/, cli_shared_utils_1.inquirer.prompt({
                            name: "ok",
                            type: "confirm",
                            message: "您确定要在当前文件下创建？"
                        })];
                case 1:
                    ok = (_a.sent()).ok;
                    if (!ok) {
                        return [2 /*return*/];
                    }
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, cli_shared_utils_1.inquirer.prompt({
                        name: 'action',
                        type: 'list',
                        message: "检测到当前目录内部文件夹和项目名一致",
                        choices: [
                            { name: "Overwrite", value: "overwrite" },
                            { name: "Cancel", value: "cancel" }
                        ]
                    })];
                case 3:
                    action = (_a.sent()).action;
                    if (!action) {
                        return [2 /*return*/];
                    }
                    if (action === 'overwrite') {
                        cli_shared_utils_1.notice.warn(["正在删除当前目录下的所有文件夹"]);
                        cli_shared_utils_1.fs.removeSync(targetDir);
                    }
                    else {
                        return [2 /*return*/];
                    }
                    _a.label = 4;
                case 4:
                    typedi_1.Container.set([
                        { id: "projectName", value: name },
                        { id: "targetDir", value: targetDir },
                    ]);
                    creator = typedi_1.Container.get(creator_1["default"]);
                    creator.create();
                    return [2 /*return*/];
            }
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports["default"] = (function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return create.apply(void 0, args)["catch"](function (error) { return cli_shared_utils_1.notice.error([error]); });
});
