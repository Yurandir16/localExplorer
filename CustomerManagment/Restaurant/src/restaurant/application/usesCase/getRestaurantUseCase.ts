import {RestaurantRepository } from "../../domain/repositories/restaurantRepository";

export class getRestaurantCase {
    constructor(readonly RestaurantRepo: RestaurantRepository){}
    async run(){
        const restaurant = await this.RestaurantRepo.getRestaurant();
        if(!restaurant){
            throw new Error("ALGO SALIO MAL CON RESTAURANTE")
        }
        return restaurant;
    }
}    