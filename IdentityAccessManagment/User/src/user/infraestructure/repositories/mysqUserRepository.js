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
exports.MysqlUserRepository = void 0;
const connection_1 = require("../../../database/connection");
const user_1 = require("../../domain/entities/user");
const ashs_1 = require("../../../helpers/ashs");
const token_1 = require("../../../helpers/token");
const usermysql_1 = require("../validation/usermysql");
class MysqlUserRepository {
    registerUser(id, name, email, phone, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, usermysql_1.isEmailRegistered)(email);
                let sql = "INSERT INTO users (id, name, phone, email, pass) VALUES ($1,$2,$3,$4,$5)";
                const params = [id, name, email, phone, pass];
                const [result] = yield (0, connection_1.query)(sql, params);
                // console.log(result)
                return new user_1.User(id, name, email, phone, pass);
            }
            catch (error) {
                console.error("Error adding review:", error);
                return error;
            }
        });
    }
    loginUser(email, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Primero, obtener el usuario por email.
                const [users] = yield (0, connection_1.query)('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);
                console.log(users);
                if (!users || users.length === 0) {
                    return null;
                }
                const user = users[0];
                console.log(user);
                const passwordMatches = yield (0, ashs_1.compare)(pass, user.pass);
                if (!passwordMatches) {
                    return 'Unauthorized';
                }
                const token = (0, token_1.tokenSigIn)(user.id, user.email);
                const dataUser = new user_1.ResponseLogin(user.id, user.name, user.email, user.telefono, user.pass, token);
                return dataUser;
            }
            catch (error) {
                console.error('Error during login:', error);
                throw error;
            }
        });
    }
}
exports.MysqlUserRepository = MysqlUserRepository;
