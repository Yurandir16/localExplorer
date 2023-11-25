import {RestaurantRepository } from "../domain/repositories/restaurantRepository";

export class inactiveRestaurantCase {
    constructor(readonly RestaurantRepo: RestaurantRepository){}
    async run(id:number,status:boolean){
        const restaurant = await this.RestaurantRepo.inactiveRestaurant(id,status);
        if(!restaurant){
            throw new Error("ALGO SALIO MAL CON RESTUARANTE")
        }
        return restaurant;
    }
}    