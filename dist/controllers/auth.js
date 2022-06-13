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
exports.renewToken = exports.login = void 0;
const User_1 = __importDefault(require("../models/User"));
const jwtGenerator_1 = require("../helpers/jwtGenerator");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const user = yield User_1.default.findOne({ where: { email: email } });
        if (!user) {
            return res.status(400).json({
                msg: "Dosen't exist"
            });
        }
        const token = yield (0, jwtGenerator_1.jwtGenerator)(user.id);
        res.json({
            token
        });
    }
    catch (error) {
        res.status(403).json({
            msg: "Dosen't exist"
        });
    }
});
exports.login = login;
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield (0, jwtGenerator_1.jwtGenerator)(req.id);
    res.json({
        'token': token,
        'user': req.user
    });
});
exports.renewToken = renewToken;
//# sourceMappingURL=auth.js.map