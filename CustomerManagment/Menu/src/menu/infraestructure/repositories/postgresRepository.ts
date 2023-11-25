import { pool2 } from "../../../database/basePG";
import { Menu } from "../../domain/entities/menu";
import { MenuRepository,MenuData,MenuDataUpdate } from "../../domain/repositories/menuRepository";

export class MenuRepositoryr implements MenuRepository {
    async createMenu(menu: MenuData): Promise<Menu | null> {
        const client = await pool2.connect();
        try {
            console.log("Conexión exitosa a la BD");
            const query = "INSERT INTO menu (pdf, restaurant_id) VALUES ($1,$2)";
            const result = await client.query(query, [menu.pdf,menu.retaurant_id]);
            console.log(query);
            if (result.rowCount > 0) {
                return menu;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            if (client) {
                client.release(); // Devuelve la conexión al pool al finalizar
            }
        }
    }
    async getMenu(): Promise<string | Menu[] | Error | null> {
        const client = await pool2.connect();
        try {
            console.log("Conexión exitosa a la BD");
            const query = "SELECT * FROM menu";
            const result = await client.query(query);
            console.log(query);
            if (result.rowCount > 0) {
                return result.rows;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            if (client) {
                client.release(); // Devuelve la conexión al pool al finalizar
            }
        }    
    }
    async updateMenu(menu:MenuDataUpdate): Promise<string | Menu | Error | null> {
        const client = await pool2.connect();
        try{
            console.log("Conexión exitosa a la BD");
            const query = "UPDATE menu SET pdf = $2, restaurant_id = $3 WHERE id = $1";
            const result = await client.query(query,[menu.pdf,menu.retaurant_id]);
            if(result.rowCount >0){
                return result.rows[0];
            }else{
                return null;
            }
        }catch(error){
            console.log(error);
            return null;
        }finally {
            if (client) {
                client.release(); // Devuelve la conexión al pool al finalizar
            }
        }    
    }
}