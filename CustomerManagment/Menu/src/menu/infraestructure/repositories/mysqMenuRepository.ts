import { query } from "../../../database/connection";
import { Menu } from "../../domain/entities/menu";
import { MenuRepository } from "../../domain/repositories/menuRepository";

export class MenuRepositoryr implements MenuRepository {
    async createMenu(pdf:string,retaurant_id:number): Promise<Menu | null|Error> {
        
        try {
            console.log("Conexión exitosa a la BD");
            let sql = "INSERT INTO menu (pdf, restaurant_id) VALUES (?,?)";
            const params: any[] = [pdf, retaurant_id];
            console.log(sql);
            const [result]: any = await query (sql,params);
            console.log(result);
            return new Menu(pdf, retaurant_id);

        } catch (error) {
            console.log("Error adding menu:",error);
            return error as Error;
        }
    }

    async getMenu(): Promise<any[]> {
        try {
            console.log("Successful connection to the database");
            let sql = "SELECT * FROM menu";
            console.log(sql);
            const [rows]: any = await query(sql,[]);
            console.log(rows);
            return rows.map((row: any) => new Menu(row.pdf, row.restaurant_id));
        } catch (error) {
            console.log("Error fetching menus:", (error as Error).message);
            throw new Error('Error al listar menu');
        }
           
    }
    async UpdateMenu(id:number,pdf:string, restaurant_id:number): Promise<string | Menu | Error | null> {
        try{
            console.log("Conexión exitosa a la BD");
            let sql = "UPDATE menu SET pdf = ?, restaurant_id = ? WHERE id = ?";
            const params:any[] = [id,pdf,restaurant_id];
            const [result]: any = await query (sql,params);
            return new Menu(pdf,restaurant_id)
        }catch(error){
            console.log(error);
            return null;
        } 
    }
}