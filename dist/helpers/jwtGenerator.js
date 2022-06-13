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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtValidator = exports.jwtGenerator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getEnv_1 = require("../helpers/getEnv");
const User_1 = __importDefault(require("../models/User"));
const jwtGenerator = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, rejected) => {
        const payload = { id };
        jsonwebtoken_1.default.sign(payload, (0, getEnv_1.getEnv)("SECRETKEY", "SECRETKEY"), {
            expiresIn: '4h'
        }, (error, token) => {
            if (error) {
                rejected("Token couldn't be created");
            }
            else {
                resolve(token);
            }
        });
    });
});
exports.jwtGenerator = jwtGenerator;
const jwtValidator = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (token.length < 10) {
            return null;
        }
        const { id } = jsonwebtoken_1.default.verify(token, (0, getEnv_1.getEnv)("SECRETKEY", "SECRETKEY"));
        const user = yield User_1.default.findOne({ where: { id: id } });
        if (user) {
            return user;
        }
        else {
            return null;
        }
    }
    catch (error) {
        return null;
    }
});
exports.jwtValidator = jwtValidator;
//# sourceMappingURL=jwtGenerator.js.map