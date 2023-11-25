import {RestaurantRepository } from "../domain/repositories/restaurantRepository";

export class getRestaurantIdCase {
    constructor(readonly RestaurantRepo: RestaurantRepository){}
    async run(id:number){
        const restaurant = await this.RestaurantRepo.getRestaurantId(id);
        if(!restaurant){
            throw new Error("ALGO SALIO MAL CON RESTUARANTE")
        }
        return restaurant;
    }
}    