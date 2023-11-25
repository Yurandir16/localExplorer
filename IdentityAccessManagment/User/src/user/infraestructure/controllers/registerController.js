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
exports.ResgisterUserController = void 0;
const user_1 = require("../../domain/entities/user");
class ResgisterUserController {
    constructor(registerUserUseCase) {
        this.registerUserUseCase = registerUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('controller');
            try {
                let { name, email, phone, pass } = req.body;
                let registerUser = yield this.registerUserUseCase.run(name, email, phone, pass);
                if (registerUser instanceof Error) {
                    return res.status(409).send({
                        status: "error",
                        message: registerUser.message
                    });
                }
                if (registerUser instanceof user_1.User) {
                    return res.status(201).send({
                        status: "succes",
                        data: {
                            id: registerUser.id,
                            name: registerUser.name,
                            email: registerUser.email,
                            phone: registerUser.phone
                        }
                    });
                }
                else {
                    return res.status(500).send({
                        status: "error",
                        message: "An unexpected error occurred while register the user."
                    });
                }
            }
            catch (error) {
                // Manejo de errores específicos
                if (error instanceof Error) {
                    if (error.message.includes('Duplicate entry') && error.message.includes('for key \'users.email\'')) {
                        return res.status(409).send({
                            status: "error",
                            message: "The email address is already in use. Please use a different email address.",
                        });
                    }
                    else if (error.message.startsWith('[')) { // Suponiendo que los errores de validación comienzan con un corchete
                        return res.status(400).send({
                            status: "error",
                            message: "Validation failed",
                            errors: JSON.parse(error.message) // Convertimos el mensaje de error en un objeto
                        });
                    }
                }
                // Para errores generales, se devuelve un error 500 con un mensaje genérico
                return res.status(500).send({
                    status: "error",
                    message: "An unexpected error occurred. Please try again later.",
                });
            }
        });
    }
}
exports.ResgisterUserController = ResgisterUserController;
