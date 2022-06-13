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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.findAll();
    res.json({ users });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield User_1.default.findByPk(id);
        if (user) {
            res.json({
                user
            });
        }
        else {
            res.status(404).json({
                msg: "Ese usuario no existe"
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: "Server error"
        });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_name, email, status } = req.body;
    try {
        const newUser = yield User_1.default.create({
            user_name: user_name,
            email: email,
            status: status
        });
        res.json({
            newUser
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Server error"
        });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield User_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({ msg: "No existe ese usuario" });
        }
        yield user.update(body);
        res.json({
            user
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Server error"
        });
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield User_1.default.findByPk(id);
        if (!user) {
            res.status(404).json({
                msg: 'No existe ese usuario',
            });
        }
        yield user.destroy();
        res.json({
            msg: 'deleteUser',
        });
    }
    catch (error) {
        res.json({
            msg: 'Server error',
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map