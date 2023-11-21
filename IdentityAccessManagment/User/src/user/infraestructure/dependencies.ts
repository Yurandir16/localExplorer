import { MysqlUserRepository } from "./repositories/mysqUserRepository";

import { RegisterUserUseCase } from "../application/registerUseCase";
import { ResgisterUserController } from "./controllers/registerController";

import { LoginUserController } from "./controllers/loginUserController";
import { LoginUserUseCase } from "../application/loginUserUseCase";



export const mysqlUserRepository = new MysqlUserRepository()

export const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository) 
export const resgisterUserController = new ResgisterUserController(registerUserUseCase)

//iniciar sesion
export const loginUserUseCase = new LoginUserUseCase(mysqlUserRepository)
export const loginUserController = new LoginUserController(loginUserUseCase)
