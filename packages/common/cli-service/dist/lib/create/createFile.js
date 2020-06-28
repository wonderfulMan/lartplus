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
exports.__esModule = true;
var interface_1 = require("../../interface");
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-18 14:52:27
 * @LastEditTime : 2020-03-26 18:42:55
 */
var CreateFile = /** @class */ (function (_super) {
    __extends(CreateFile, _super);
    function CreateFile(context, fileTypeName, file) {
        var _this = _super.call(this) || this;
        _this.context = context;
        _this.fileTypeName = fileTypeName;
        _this.file = file;
        _this.workDirPath = _this.context.cwdPath + '/' + _this.context.workDir;
        return _this;
    }
    CreateFile.prototype.getCreateFileConfig = function () {
        var paths = this.file.split('/');
        var pathsLen = paths.length;
        var filePath = !pathsLen
            ? this.fileTypeName + "/" + this.file
            : pathsLen === 1
                ? this.fileTypeName + "/" + paths[0]
                : this.fileTypeName + "/" + paths.join('/');
        var createPath = this.workDirPath + "/" + filePath;
        this.filePath = filePath;
        this.createPath = createPath;
    };
    CreateFile.prototype.checkRepeatFile = function () {
        this.getCreateFileConfig();
        // 长度为1 直接在当前components读取文件
        var isExists = cli_shared_utils_1.fs.existsSync(this.createPath);
        if (isExists) {
            cli_shared_utils_1.notice.error(["\u5F53\u524D\u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728 -> " + this.filePath]);
            process.exit(0);
        }
    };
    CreateFile.prototype.getModuleName = function () {
        var filesArr = this.filePath.split('/');
        return filesArr[filesArr.length - 1];
    };
    CreateFile.prototype.writeFile = function (tplPath, moduleName, suffix) {
        this.mkDirByTarget(this.file)["catch"](function (err) { return cli_shared_utils_1.notice.error([err]); });
        var writeDir = this.workDirPath + "/" + this.filePath;
        var writeFile = writeDir + "/index." + suffix;
        var template = cli_shared_utils_1.fs.readFileSync(tplPath, { encoding: "utf-8" });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cli_shared_utils_1.Juice.set('strip', false);
        var content = cli_shared_utils_1.Juice(template, { moduleName: moduleName });
        cli_shared_utils_1.fs.writeFileSync(writeFile, content);
    };
    CreateFile.prototype.mkDirByTarget = function (dir) {
        return __awaiter(this, void 0, void 0, function () {
            var arr, dirs, baseDir;
            return __generator(this, function (_a) {
                arr = dir.split('/');
                dirs = arr[0];
                baseDir = this.workDirPath + "/" + this.fileTypeName;
                arr.forEach(function (it) {
                    if (!cli_shared_utils_1.fs.existsSync(baseDir + "/" + dirs)) {
                        cli_shared_utils_1.fs.mkdirSync(baseDir + "/" + dirs);
                    }
                    dirs = dirs + '/' + it;
                });
                return [2 /*return*/];
            });
        });
    };
    CreateFile.prototype.validataPath = function () {
        if (!this.file) {
            cli_shared_utils_1.notice.error(["\u8BF7\u8F93\u5165\u521B\u5EFA\u6587\u4EF6\u540D\u4F8B\u5982 " + this.fileTypeName + "/helloWorld"]);
            process.exit(0);
        }
        this.checkRepeatFile();
        return true;
    };
    return CreateFile;
}(interface_1.CreateFileInterface));
exports.CreateFile = CreateFile;
