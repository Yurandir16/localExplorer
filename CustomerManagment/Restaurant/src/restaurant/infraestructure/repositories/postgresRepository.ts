import { RestaurantData } from "../../domain/repositories/restaurantRepository";
import { pool } from "../../../database/postgresDb";
import { Restaurant } from "../../domain/entities/restaurant";
import { RestaurantRepository } from "../../domain/repositories/restaurantRepository";

export class RestaurantRepositoryr implements RestaurantRepository {
    async createRestaurant(restaurant: RestaurantData): Promise<Restaurant | null> {
        const client = await pool.connect();
        try {
            console.log("Conexión exitosa a la BD");
            const query = "INSERT INTO restaurant (id, name_local, description,gender, image, address,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7)";
            const result = await client.query(query, [restaurant.id, restaurant.name_local, restaurant.description,restaurant.gender, restaurant.image,restaurant.addres, restaurant.user_id]);
            console.log(query);
            if (result.rowCount > 0) {
                return restaurant;
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
}