import {RestaurantRepository } from "../domain/repositories/restaurantRepository";

export class getLocationRestaurantCase {
    constructor(readonly RestaurantRepo: RestaurantRepository){}
    async run(location:string){
        const restaurant = await this.RestaurantRepo.getLocation(location);
        if(!restaurant){
            throw new Error("ALGO SALIO MAL CON LA IMAGEN")
        }
        return restaurant;
    }
}    