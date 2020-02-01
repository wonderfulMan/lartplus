"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-02-01 14:58:57
 * @LastEditTime : 2020-02-01 23:39:54
 */
var events_1 = require("events");
var execa_1 = __importDefault(require("execa"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
require("reflect-metadata");
var PKG_TPM_PATH = path_1["default"].resolve(__dirname, '../template/package.tpl');
var Generator = /** @class */ (function (_super) {
    __extends(Generator, _super);
    function Generator(targetDir, projectName, answers) {
        var _this = _super.call(this) || this;
        _this.targetDir = targetDir;
        _this.projectName = projectName;
        _this.answers = answers;
        return _this;
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
    Generator.prototype.create = function () {
        this.genPkgFile()["catch"](function (err) { return cli_shared_utils_1.notice.error([err]); });
        this.resolvePkgDependencies();
    };
    /**
     * @description 生成package.json依赖
     * @param targetDir 当前cli生成文件夏商文路径
     * @param answers cli选项
     */
    Generator.prototype.genPkgFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pkgTemplate, dependencies, scripts, content;
            return __generator(this, function (_a) {
                this.emit('gen_package_start');
                pkgTemplate = fs_1["default"].readFileSync(PKG_TPM_PATH, { encoding: "utf-8" });
                dependencies = {
                    "@lartplus/cli-service": "\"^0.0.8-alpha.0\""
                };
                scripts = {
                    "dev": "\"lartplus-cli-service dev\",",
                    "build": "\"lartplus-cli-service build\",",
                    "lint": "\"lartplus-cli-service lint\""
                };
                content = JSON.parse(cli_shared_utils_1.juicer(pkgTemplate, {
                    projectName: this.projectName,
                    scripts: scripts,
                    dependencies: dependencies
                }));
                fs_1["default"].writeFileSync(this.targetDir + "/test/package.json", JSON.stringify(content, null, 2));
                this.emit('gen_package_end');
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    Generator.prototype.resolvePkgDependencies = function () {
        var _a;
        var child = execa_1["default"](this.answers.packageManger, ['install'], {
            cwd: this.targetDir + '/test'
        });
        (_a = child.stdout) === null || _a === void 0 ? void 0 : _a.on('data', function (buffer) {
            console.log(buffer.toString());
        });
    };
    return Generator;
}(events_1.EventEmitter));
exports["default"] = Generator;
