import { validate } from "class-validator";
import { User } from "../domain/entities/user";
import { v4 as uuid } from "uuid";
import { IUsuarioRepository } from "../domain/respositories/userRepository";
import { ValidatorRegisterUser } from "../domain/validations/user";
import { encrypt } from "../../helpers/ashs";



export class RegisterUserUseCase {
    constructor(readonly usuarioRepository: IUsuarioRepository) { }

    async run(name: string,email: string,telefono: string,pass: string,): Promise<User | null | string | Error>{

        //valres generados 
        const miuuid: string = uuid()
       
        //validator-class
        let data = new ValidatorRegisterUser(miuuid, name, email, telefono, pass);
        const validation = await validate(data)
        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }
        //aqui por que si va vacio se hashea antes evitando asi la validacion
        const hashPassword = await encrypt(pass)
        try {
            const createUser = await this.usuarioRepository.registerUser(miuuid,name,email,telefono,hashPassword);
            return createUser;
        } catch (error) {
            return null;
        }
    }
}