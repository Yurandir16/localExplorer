import { Request, Response } from "express";
import { getLocationRestaurantCase } from "../../application/usesCase/getLocationRestaurant";
import { Restaurant } from "../../domain/entities/restaurant";

export class RestaurantLocationControllerGet {
    constructor(
        readonly getLocationRestaurantUseCase: getLocationRestaurantCase
    ) { }

    async getRestaurantlocation(req: Request, res: Response) {
        console.log("controller")
        try {
            let address = String(req.query.address);

            let location = await this.getLocationRestaurantUseCase.run(address)
            if ( location instanceof Error) {
               return res.status(409).send({
                    status: "Error",
                    data: location.message
                });
            } 
            if (Array.isArray(location) && location.length > 0){
                return res.status(201).send({
                    status:"success",
                    data: location.map(restaurant => ({
                        name_local:restaurant.name_local,
                        description: restaurant.description,
                        gender: restaurant.gender,
                        image: restaurant.image,
                        address: restaurant.address,
                        coordinate: restaurant.coordinate,
                        status: restaurant.status,
                        user_id: restaurant.user_id,
                        
                    }))
                })
            }else{
                return res.status(500).send({
                    status:"error",
                    message:"An unexpected error occurred location"
                })
            }
        } catch (error) {
            return null;
        }
    }
}