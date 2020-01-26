"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-21 13:49:53
 * @LastEditTime : 2020-01-26 14:43:41
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
var typedi_1 = require("typedi");
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var frameWork_1 = __importDefault(require("./frameWork"));
var featurePresets_1 = __importDefault(require("./featurePresets"));
var eslintConfig_1 = __importDefault(require("./eslintConfig"));
var packageManger_1 = __importDefault(require("./packageManger"));
var createPresetsFile_1 = __importDefault(require("./createPresetsFile"));
var createFilename_1 = __importDefault(require("./createFilename"));
var ResolvePrompt = /** @class */ (function () {
    function ResolvePrompt() {
    }
    ResolvePrompt.prototype.getAllPresetsApi = function () {
        return [
            this.framwWork,
            this.featurePresets,
            this.eslintConfig,
            this.packageManger,
            this.createPresetsFile,
            this.createFilename
        ].map(function (api) { return api.config(); });
    };
    ResolvePrompt.prototype.executePrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var answers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cli_shared_utils_1.inquirer.prompt(this.getAllPresetsApi())];
                    case 1:
                        answers = _a.sent();
                        console.log(answers);
                        return [2 /*return*/, answers];
                }
            });
        });
    };
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", frameWork_1["default"])
    ], ResolvePrompt.prototype, "framwWork");
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", featurePresets_1["default"])
    ], ResolvePrompt.prototype, "featurePresets");
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", eslintConfig_1["default"])
    ], ResolvePrompt.prototype, "eslintConfig");
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", packageManger_1["default"])
    ], ResolvePrompt.prototype, "packageManger");
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", createPresetsFile_1["default"])
    ], ResolvePrompt.prototype, "createPresetsFile");
    __decorate([
        typedi_1.Inject(),
        __metadata("design:type", createFilename_1["default"])
    ], ResolvePrompt.prototype, "createFilename");
    ResolvePrompt = __decorate([
        typedi_1.Service()
    ], ResolvePrompt);
    return ResolvePrompt;
}());
exports.ResolvePrompt = ResolvePrompt;
exports["default"] = ResolvePrompt;
