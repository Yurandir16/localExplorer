import { ResponseLogin, User } from "../entities/user";

export interface IUsuarioRepository {
    registerUser( 
        id: string,
        name: string,
        email: string,
        phone: string,
        pass: string,
    ): Promise<User | null | string | Error> ;


    loginUser(
        email:string,
        pass:string
    ):Promise<ResponseLogin | string | null>  //listo

}

