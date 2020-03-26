"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var parseEnv = function (rest, context) {
    var mode = rest.mode, cutsomEnv = rest.cutsomEnv;
    var env = context.configFile.env;
    var result = {};
    if (env && cutsomEnv) {
        var envKey = __rest(env, []);
        Object.entries(envKey)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            if (key === cutsomEnv) {
                result = value;
            }
        });
    }
    return {
        NODE_ENV: mode === 'dev' ? "'development'" : "'production'",
        CUSTOM_ENV: JSON.stringify(result)
    };
};
exports.parseEnv = parseEnv;
