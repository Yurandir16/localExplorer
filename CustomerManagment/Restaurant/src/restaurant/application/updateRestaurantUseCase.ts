import {RestaurantRepository,RestaurantDataUpdate } from "../domain/repositories/restaurantRepository";

export class updateRestaurantCase {
    constructor(readonly RestaurantRepo: RestaurantRepository){}
    async run(restaurants:RestaurantDataUpdate){
        const restaurant = await this.RestaurantRepo.updateRestaurant(restaurants);
        if(!restaurant){
            throw new Error("ALGO SALIO MAL CON RESTAURANTE")
        }
        return restaurant;
    }
}    