"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const signale_1 = require("signale");
const userRouter_1 = require("./user/infraestructure/routers/userRouter");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use((0, express_fileupload_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1/users', userRouter_1.userRoutes);
const port = process.env.PORT || 3001;
app.listen(port, () => {
    signale.success(`Corriendo en el puerto ${port}`);
});
