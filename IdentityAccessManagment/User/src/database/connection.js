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
exports.query = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
const signale_1 = require("signale");
const signale = new signale_1.Signale();
dotenv_1.default.config();
const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'localexplorer',
    password: 'feisima54321',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000, // Tiempo máximo en milisegundos que una conexión puede estar inactiva antes de ser liberada
};
const pool = new pg_1.Pool(config);
function query(sql, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield pool.connect();
            signale.success("Conexión exitosa a la BD");
            const result = yield client.query(sql, params);
            client.release();
            return result;
        }
        catch (error) {
            console.log(process.env.DB_HOST); // debería imprimir el host de tu base de datos
            signale.error(error);
            return null;
        }
    });
}
exports.query = query;
