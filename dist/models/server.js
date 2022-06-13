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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const socketController_1 = __importDefault(require("../controllers/socketController"));
const user_1 = __importDefault(require("../routes/user"));
const auth_1 = __importDefault(require("../routes/auth"));
const getEnv_1 = require("../helpers/getEnv");
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.paths = {
            auth: '/api/auth',
            users: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = (0, getEnv_1.getEnv)("port", '8080');
        this.serverHttp = (0, http_1.createServer)(this.app);
        this.io = new socket_io_1.Server(this.serverHttp);
        this.dbConnection();
        this.middlewares();
        this.routes();
        this.sockets();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
            }
            catch (error) {
                throw new Error("Nao tem database");
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.paths.users, user_1.default);
        this.app.use(this.paths.auth, auth_1.default);
    }
    sockets() {
        this.io.on("connection", (socket) => (0, socketController_1.default)(socket, this.io));
    }
    listen() {
        this.serverHttp.listen(this.port, () => {
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map