import { query } from "../../../database/connection";
import { ResponseLogin, User } from "../../domain/entities/user";
import { IUsuarioRepository } from "../../domain/respositories/userRepository";
import { compare, encrypt } from '../../../helpers/ashs';
import { tokenSigIn } from "../../../helpers/token";
import { isEmailRegistered } from "../validation/usermysql";
import deleteFromFirebase from "../../../helpers/deleteImage";

export class MysqlUserRepository implements IUsuarioRepository {

    async registerUser(id: string, name: string, email: string, phone: string, pass: string): Promise<User | null | string | Error> {
      
        try {
            
            await isEmailRegistered(email);

            let sql = "INSERT INTO users (id, name, phone, email, pass) VALUES ($1,$2,$3,$4,$5)";
            const params: any[] = [id, name, email, phone, pass];
            const [result]: any = await query(sql, params);
            // console.log(result)
            return new User(id, name, email, phone, pass);
        } catch (error) {
            console.error("Error adding review:", error);
            return error as Error;
        }
    }


    async loginUser(email: string, pass: string): Promise<ResponseLogin  |string | null> {
        try {
            // Primero, obtener el usuario por email.
            const [users]: any = await query('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);
            console.log(users);
          
            if (!users || users.length === 0) {
                return null
            }

            const user = users[0];
            console.log(user)
            const passwordMatches = await compare(pass, user.pass); 
          

            if (!passwordMatches) {
                return 'Unauthorized'
            }
            const token:string = tokenSigIn(user.id,user.email)

            const dataUser: ResponseLogin = new ResponseLogin(
                user.id,
                user.name,
                user.email,
                user.telefono,
                user.pass,
                token
            )
           
            return dataUser;

        } catch (error) {
            console.error('Error during login:', error);
            throw error;
        }
    }

}