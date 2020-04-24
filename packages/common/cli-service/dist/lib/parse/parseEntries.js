"use strict";
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
 * @Date: 2020-03-17 15:06:34
 * @LastEditTime : 2020-04-08 17:18:53
 */
var path_1 = __importDefault(require("path"));
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var validateDir = function (workDir, entryDir) {
    var hasWorkDir = cli_shared_utils_1.fs.existsSync(workDir);
    var hasEntryDir = cli_shared_utils_1.fs.existsSync(entryDir);
    if (!hasWorkDir) {
        cli_shared_utils_1.notice.error(['请设置工作目录']);
        return false;
    }
    if (!hasEntryDir) {
        cli_shared_utils_1.notice.error(['enties目录不能删除']);
        return false;
    }
    return true;
};
var readEntriesDir = function (entryDir) { return __awaiter(void 0, void 0, void 0, function () {
    var entriesFiles, isMultiple;
    return __generator(this, function (_a) {
        entriesFiles = cli_shared_utils_1.fs.readdirSync(entryDir);
        isMultiple = entriesFiles.length > 1;
        return [2 /*return*/, {
                isMultiple: isMultiple,
                entriesFiles: entriesFiles
            }];
    });
}); };
var composeEntries = function (entriesFiles, entryDir) {
    return entriesFiles.map(function (it) {
        var appName = it.split('.')[0];
        if (!appName) {
            cli_shared_utils_1.notice.error(['entries目录下入口文件格式错误']);
            process.exit(0);
        }
        var fileExtName = path_1["default"].extname(it);
        var filePath = entryDir + "/" + it;
        return {
            appName: appName,
            fileExtName: fileExtName,
            filePath: filePath
        };
    });
};
var parseEntries = function (context) { return __awaiter(void 0, void 0, void 0, function () {
    var currentDir, workDir, entryDir, hasDir, readPayload, isMultiple, entriesFiles, entries;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                currentDir = context.cwdPath;
                workDir = currentDir + "/" + context.workDir;
                entryDir = currentDir + "/" + context.workDir + "/entries";
                hasDir = validateDir(workDir, entryDir);
                if (!hasDir)
                    process.exit(0);
                return [4 /*yield*/, readEntriesDir(entryDir)["catch"](function (err) {
                        cli_shared_utils_1.notice.error([err]);
                        process.exit(0);
                    })];
            case 1:
                readPayload = _c.sent();
                isMultiple = (_a = readPayload) === null || _a === void 0 ? void 0 : _a.isMultiple;
                entriesFiles = (_b = readPayload) === null || _b === void 0 ? void 0 : _b.entriesFiles;
                entries = composeEntries(entriesFiles, entryDir);
                if (entries.length < 1) {
                    cli_shared_utils_1.notice.error(['entires目录下没有任何入口文件，请检查']);
                    process.exit(0);
                }
                return [2 /*return*/, entries];
        }
    });
}); };
exports.parseEntries = parseEntries;
