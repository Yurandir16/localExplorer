import { Restaurant } from "../entities/restaurant";

export interface RestaurantRepository {
    createRestaurant(restaurants:RestaurantData): Promise<Restaurant | null | string | Error> ;
    getRestaurant():Promise <Restaurant[]|null|string|Error>;
    getRestaurantId(id:number):Promise <Restaurant|null|string|Error>;
    getRestaurantUser(user:string):Promise <Restaurant|null|string|Error>;
    inactiveRestaurant(id:number,status:boolean): Promise <Restaurant|null|string|Error>;
    updateRestaurant(restaurants:RestaurantDataUpdate): Promise <Restaurant|null|string|Error>;
    //getImagen(name_image:string): Promise <Restaurant|null|string|Error>;
    getLocation(location:string): Promise <Restaurant[]|null|string |Error>;
}
export interface RestaurantData{
    name_local: string,
    description: string,
    gender:string,
    image: string,
    address: string,
    coordinate:string,
    status: boolean,
    user_id: number
}

export interface RestaurantDataUpdate{
    id:string,
    name_local: string,
    description: string,
    gender:string,
    image: string,
    address: string,
    coordinate:string,
    status: boolean,
    user_id: number
}