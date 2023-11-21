import { Restaurant } from "../entities/restaurant";

export interface RestaurantRepository {
    createRestaurant(restaurant:RestaurantData): Promise<Restaurant | null | string | Error> ;
    getRestaurant():Promise<Restaurant[]|null|string|Error>;
}

export interface RestaurantData{
    id: number,
    name_local: string,
    description: string,
    gender:string,
    image: string,
    addres: string,
    user_id: number
}