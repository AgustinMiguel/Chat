"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getEnv = (evnName, fallBack) => {
    const envValue = process.env.envName;
    if (envValue) {
        return envValue;
    }
    if (fallBack !== undefined) {
        return fallBack;
    }
    throw (new Error(`${evnName} dosen't exist`));
};
exports.getEnv = getEnv;
//# sourceMappingURL=getEnv.js.map