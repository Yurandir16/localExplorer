"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseLogin = exports.User = void 0;
class User {
    constructor(id, name, phone, email, pass) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.pass = pass;
    }
}
exports.User = User;
class ResponseLogin {
    constructor(id, name, phone, email, pass, token) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.pass = pass;
        this.token = token;
    }
}
exports.ResponseLogin = ResponseLogin;
