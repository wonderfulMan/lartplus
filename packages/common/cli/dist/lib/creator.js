"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-20 14:22:01
 * @LastEditTime : 2020-05-15 14:07:41
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
require("reflect-metadata");
var typedi_1 = require("typedi");
var cli_generator_1 = __importDefault(require("@lartplus/cli-generator"));
var resolvePrompt_1 = __importDefault(require("./prompt/resolvePrompt"));
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.resolvePrompt.executePrompt()];
                    case 1:
                        _a.promptFeature = _b.sent();
                        this.generator = new cli_generator_1["default"](this.targetDir, this.projectName, this.promptFeature);
                        this.projectCreateEventListener();
                        cli_shared_utils_1.clearConsole();
                        this.generator.create();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description 项目生成监听generator对象事件
     */
    Creator.prototype.projectCreateEventListener = function () {
        var or = cli_shared_utils_1.ora({
            text: 'download dependencies...'
        });
        this.generator.on('gen_package_start', function () {
            cli_shared_utils_1.notice.done(['开始生成package.json文件']);
        });
        this.generator.on('gen_package_end', function () {
            cli_shared_utils_1.notice.normalLogger();
            cli_shared_utils_1.notice.done(['开始生成package.json文件成功！']);
            // or.start()
        });
        this.generator.on('resolve_dependencies_start', function () {
            cli_shared_utils_1.notice.normalLogger('\n');
            cli_shared_utils_1.notice.done(['开始下载依赖']);
        });
        this.generator.on('resolve_dependencies_end', function () {
            or.stopAndPersist({
                symbol: cli_shared_utils_1.chalk.green('✔'),
                text: 'success'
            });
            cli_shared_utils_1.notice.normalLogger();
            cli_shared_utils_1.notice.done(['下载依赖完毕！']);
        });
        this.generator.on('gen_dir_start', function () {
            cli_shared_utils_1.notice.normalLogger();
            cli_shared_utils_1.notice.done(['开始生成项目文件']);
        });
        this.generator.on('gen_dir_end', function () {
            cli_shared_utils_1.notice.normalLogger();
            cli_shared_utils_1.notice.done(['生成项目文件成功！']);
        });
        this.generator.on('gen_typescriptConfig_start', function () {
            cli_shared_utils_1.notice.normalLogger();
            cli_shared_utils_1.notice.done(['开始生成tsconfig.json']);
        });
        this.generator.on('gen_typescriptConfig_end', function () {
            cli_shared_utils_1.notice.normalLogger();
            cli_shared_utils_1.notice.done(['生成tsconfig.json成功！']);
        });
    };
    __decorate([
        typedi_1.Inject('projectName'),
        __metadata("design:type", String)
    ], Creator.prototype, "projectName");
    __decorate([
        typedi_1.Inject('targetDir'),
        __metadata("design:type", String)
    ], Creator.prototype, "targetDir");
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", resolvePrompt_1["default"])
    ], Creator.prototype, "resolvePrompt");
    Creator = __decorate([
        typedi_1.Service()
    ], Creator);
    return Creator;
}());
exports["default"] = Creator;
