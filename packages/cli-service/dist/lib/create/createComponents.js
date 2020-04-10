"use strict";
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-17 16:01:39
 * @LastEditTime : 2020-03-26 17:19:49
 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var createFile_1 = require("./createFile");
var path_1 = __importDefault(require("path"));
var CreateComponents = /** @class */ (function (_super) {
    __extends(CreateComponents, _super);
    function CreateComponents(context, action, file) {
        var _this = _super.call(this, context, action, file) || this;
        _this.action = action;
        var suffix = _this.getFileSuffix();
        _this.validataPath();
        _this.getTmpPathBySuffix(suffix);
        return _this;
    }
    CreateComponents.prototype.getFileSuffix = function () {
        return this.context.configFile.framework === 'vue'
            ? 'vue'
            : this.context.configFile.typescript
                ? 'tsx'
                : 'jsx';
    };
    CreateComponents.prototype.getTmpPathBySuffix = function (suffix) {
        var basePath = path_1["default"].resolve(__dirname, '../../template');
        this.suffix = suffix;
        this.tmpPath = basePath + "/" + this.action + "." + suffix + ".tpl";
    };
    CreateComponents.prototype.writeComponentsToTarget = function () {
        this.moduleName = this.getModuleName();
        this.writeFile(this.tmpPath, this.moduleName, this.suffix);
    };
    return CreateComponents;
}(createFile_1.CreateFile));
function createComponents(context, action, file) {
    var create = new CreateComponents(context, action, file);
    create.writeComponentsToTarget();
}
exports.createComponents = createComponents;
