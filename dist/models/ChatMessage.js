"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = void 0;
const Message_1 = require("./Message");
class ChatMessage {
    constructor() {
        this.messages = [];
        this.users = [];
    }
    get last10() {
        this.messages = this.messages.splice(0, 10);
        return this.messages;
    }
    get onlineUsers() {
        return Object.values(this.users);
    }
    sendMessage(id, user_name, text) {
        this.messages.unshift(new Message_1.Message(id, user_name, text));
    }
    connectUser(user) {
        this.users.push(user);
    }
    disconectUser(id) {
        let count = 0;
        this.users.forEach(User => {
            if (User.id == id) {
                this.users.splice(count, 1);
            }
            count++;
        });
    }
}
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=ChatMessage.js.map