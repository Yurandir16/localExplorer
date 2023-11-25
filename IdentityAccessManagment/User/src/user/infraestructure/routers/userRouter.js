"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
exports.userRoutes = express_1.default.Router();
exports.userRoutes.post('/register', dependencies_1.resgisterUserController.run.bind(dependencies_1.resgisterUserController));
exports.userRoutes.post('/login', dependencies_1.loginUserController.run.bind(dependencies_1.loginUserController));
