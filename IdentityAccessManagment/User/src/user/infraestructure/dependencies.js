"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = exports.loginUserUseCase = exports.resgisterUserController = exports.registerUserUseCase = exports.mysqlUserRepository = void 0;
const mysqUserRepository_1 = require("./repositories/mysqUserRepository");
const registerUseCase_1 = require("../application/registerUseCase");
const registerController_1 = require("./controllers/registerController");
const loginUserController_1 = require("./controllers/loginUserController");
const loginUserUseCase_1 = require("../application/loginUserUseCase");
exports.mysqlUserRepository = new mysqUserRepository_1.MysqlUserRepository();
exports.registerUserUseCase = new registerUseCase_1.RegisterUserUseCase(exports.mysqlUserRepository);
exports.resgisterUserController = new registerController_1.ResgisterUserController(exports.registerUserUseCase);
//iniciar sesion
exports.loginUserUseCase = new loginUserUseCase_1.LoginUserUseCase(exports.mysqlUserRepository);
exports.loginUserController = new loginUserController_1.LoginUserController(exports.loginUserUseCase);
