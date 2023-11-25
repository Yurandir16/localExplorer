import {RestaurantRepository,RestaurantData } from "../../domain/repositories/restaurantRepository";

export class CreateRestaurantCase {
    constructor(readonly RestaurantRepo: RestaurantRepository){}
    async run(restaurants:RestaurantData){
        const restaurant = await this.RestaurantRepo.createRestaurant(restaurants);
        if(!restaurant){
            throw new Error("ALGO SALIO MAL CON RESTAURANTE")
        }
        return restaurant;
    }
}    