import {RestaurantRepository } from "../../domain/repositories/restaurantRepository";

export class getRestaurantUserCase {
    constructor(readonly RestaurantRepo: RestaurantRepository){}
    async run(user:string){
        const restaurant = await this.RestaurantRepo.getRestaurantUser(user);
        if(!restaurant){
            throw new Error("ALGO SALIO MAL CON RESTUARANTE")
        }
        return restaurant;
    }
}    