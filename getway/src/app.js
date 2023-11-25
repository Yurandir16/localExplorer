"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const signale_1 = require("signale");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use((0, morgan_1.default)('dev'));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
app.use('/api/v1/Menu', (0, express_http_proxy_1.default)('http://localhost:3001'));
app.listen(PORT, () => {
    signale.success(`Servidor corriendo en http://localhost:${PORT}`);
});
