import { RestaurantData, RestaurantDataUpdate } from "../../domain/repositories/restaurantRepository";
import { pool } from "../../../database/postgresDb";
import { Restaurant } from "../../domain/entities/restaurant";
import { RestaurantRepository } from "../../domain/repositories/restaurantRepository";

export class RestaurantRepositoryr implements RestaurantRepository {
    async createRestaurant(restaurants: RestaurantData): Promise<Restaurant | null> {
        const client = await pool.connect();
        try {
            console.log("Conexión exitosa a la BD");
            const query = "INSERT INTO restaurant (name_local, description,gender, image, address,coordinate,status,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *";
            const result = await client.query(query, [ restaurants.name_local, restaurants.description,restaurants.gender, restaurants.image,restaurants.address,restaurants.coordinate,restaurants.status, restaurants.user_id]);
            console.log(query);
            if (result.rowCount > 0) {
                return result.rows[0];
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
    async getRestaurant(): Promise<string | Restaurant[] | Error | null> {
        const client = await pool.connect();
        try {
            console.log("Conexión exitosa a la BD");
            const query = "SELECT * FROM restaurant";
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
    async getRestaurantId(id:number): Promise<string | Restaurant | Error | null> {
        const client = await pool.connect();
        try {
            console.log("Conexión exitosa a la BD");
            const query = "SELECT * FROM restaurant WHERE id = $1";
            const result = await client.query(query,[id]);
            console.log(query);
            if (result.rowCount > 0) {
                return result.rows[0];
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

    async getRestaurantUser(user:string): Promise<string | Restaurant | Error | null> {
        const client = await pool.connect();
        try {
            console.log("Conexión exitosa a la BD");
            const query = "SELECT * FROM restaurant WHERE user = $1";
            const result = await client.query(query,[user]);
            console.log(query);
            if (result.rowCount > 0) {
                return result.rows[0];
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
    async inactiveRestaurant(id:number,status:boolean): Promise<string | Restaurant | Error | null> {
        const client = await pool.connect();
        try {
            console.log("Conexión exitosa a la BD");
            const query = "UPDATE restaurant SET status = $2 WHERE id = $1";
            const result = await client.query(query,[id,status]);
            console.log(query);
            if (result.rowCount > 0) {
                return result.rows[0];
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

    async updateRestaurant(restaurants:RestaurantDataUpdate): Promise<string | Restaurant | Error | null> {
        const client = await pool.connect();
        try{
            console.log("Conexión exitosa a la BD");
            const query = "UPDATE restaurant SET name_local = $2, description = $3, gender = $4, image = $5, address = $6, status = $7, user_id = $8 WHERE id = $1";
            const result = await client.query(query,[restaurants.id,restaurants.name_local,restaurants.description,restaurants.gender,restaurants.image, restaurants.address,restaurants.status,restaurants.user_id]);
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

    // async getImagen(name_image: string): Promise<string | Restaurant | Error | null> {
    //     const client = await pool.connect();
    //     try {
    //         const query = "SELECT * FROM restaurant WHERE image = $1";
    //         const result = await client.query(query,[name_image]);
    //         if (result.rowCount > 0){
    //             return result.rows[0]
    //         }else{
    //             return null;
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         return null;
    //     }finally{
    //         if (client) {
    //             client.release();
    //         }
    //     }
    // }
    async getLocation(location: string): Promise<string | Restaurant[] | Error | null> {
        const client = await pool.connect();
        try {
            const query = "SELECT * FROM restaurant WHERE address = $1";
            const result = await client.query(query,[location]);
            if (result.rowCount > 0){
                return result.rows
            }else{
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }finally{
            if (client) {
                client.release();
            }
        }
    }

}