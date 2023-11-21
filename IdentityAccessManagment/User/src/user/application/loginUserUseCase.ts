import { validate } from "class-validator";
import { ResponseLogin, User } from "../domain/entities/user";
import { IUsuarioRepository } from "../domain/respositories/userRepository";
import { ValidateLogin } from "../domain/validations/user";


export class LoginUserUseCase {
    constructor(readonly usuarioRepository: IUsuarioRepository) {}
    
    async run(email:string,pass:string): Promise<ResponseLogin |string | null> {
        
        //validator-class
        let post = new ValidateLogin(email, pass)
        const validation = await validate(post)
        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }

        try {
            const loginUser = await this.usuarioRepository.loginUser(email,pass)
            return loginUser;
        } catch (error) {
            return null;
        }
    }
}