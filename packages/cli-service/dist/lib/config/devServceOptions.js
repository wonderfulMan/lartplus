"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-26 15:18:18
 * @LastEditTime : 2020-03-26 17:21:35
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
var os_1 = __importDefault(require("os"));
var portfinder_1 = __importDefault(require("portfinder"));
exports.getNetworkIp = function () {
    var needHost = ''; // 打开的host
    try {
        // 获得网络接口列表
        var network = os_1["default"].networkInterfaces();
        for (var dev in network) {
            var iface = network[dev];
            for (var i = 0; i < iface.length; i++) {
                var alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    needHost = alias.address;
                }
            }
        }
    }
    catch (e) {
        needHost = 'localhost';
    }
    return needHost;
};
exports.getNetworkPort = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                portfinder_1["default"].basePort = 8080;
                return [4 /*yield*/, portfinder_1["default"].getPortPromise({ port: 3000, stopPort: 9000 })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getDevServerOptions = function (context, mode, entriesMap) { return __awaiter(void 0, void 0, void 0, function () {
    var host, port;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                host = exports.getNetworkIp();
                return [4 /*yield*/, exports.getNetworkPort()];
            case 1:
                port = _a.sent();
                return [2 /*return*/, Object.assign({
                        host: host,
                        port: port,
                        quiet: true,
                        clientLogLevel: 'none',
                        contentBase: "./",
                        openPage: entriesMap.map(function (it) { return it.htmlFilenamePath; }),
                        open: 'Google Chrome'
                    }, context.configFile.serverConfig)];
        }
    });
}); };
