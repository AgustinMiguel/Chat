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
Object.defineProperty(exports, "__esModule", { value: true });
const jwtGenerator_1 = require("../helpers/jwtGenerator");
const models_1 = require("../models");
const chatMessage = new models_1.ChatMessage();
const socketsController = (socket, io) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, jwtGenerator_1.jwtValidator)(socket.handshake.headers['x-token']);
    if (!user) {
        return socket.disconnect();
    }
    chatMessage.connectUser(user);
    io.emit('onlineUsers', chatMessage.onlineUsers);
    socket.emit('receiveMessages', chatMessage.last10);
    socket.on('disconnect', () => {
        chatMessage.disconectUser(user.id);
        io.emit('onlineUsers', chatMessage.onlineUsers);
    });
    socket.on('sendMessage', ({ message }) => {
        chatMessage.sendMessage(user.id, user.user_name, message);
        io.emit('receiveMessages', chatMessage.last10);
    });
});
exports.default = socketsController;
//# sourceMappingURL=socketController.js.map