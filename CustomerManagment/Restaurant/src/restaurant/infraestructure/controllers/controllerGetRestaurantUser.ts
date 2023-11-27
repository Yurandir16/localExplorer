import { Request, Response } from "express";
import { getUserRestaurantCase } from "../../application/usesCase/getRestaurantUserUseCase";
import { Restaurant } from "../../domain/entities/restaurant";

export class RestaurantControllerGetUser {
    constructor(
        readonly getRestaurantUserUseCase: getUserRestaurantCase
    ) { }

    async getRestaurantUser(req: Request, res: Response) {
        console.log("controller")
        try {
            let user_id = String(req.query.user_id);

            let userRes = await this.getRestaurantUserUseCase.run(user_id)
            
            if ( userRes instanceof Error) {
               return res.status(409).send({
                    status: "Error",
                    data: userRes.message
                });
            } 
            if (userRes instanceof Restaurant){
                return res.status(201).send({
                    status:"success",
                    data:{
                        name_local:userRes.name_local,
                        description: userRes.description,
                        gender: userRes.gender,
                        image: userRes.image,
                        address: userRes.address,
                        coordinate: userRes.coordinate,
                        status: userRes.status,
                        user_id: userRes.user_id,
                    }
                })
            }else{
                return res.status(500).send({
                    status:"error",
                    message:"An unexpected error occurred restaurant for user"
                })
            }
        } catch (error) {
            return null;
        }
    }
}