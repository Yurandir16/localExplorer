import { Request, Response } from "express";
import { getRestaurantIdCase } from "../../application/usesCase/getRestaurantIdUseCase";
import { Restaurant } from "../../domain/entities/restaurant";

export class RestaurantControllerGetId {
    constructor(
        readonly getRestaurantIdUseCase: getRestaurantIdCase
    ) { }

    async getRestaurantId(req: Request, res: Response) {
        
        console.log("controller")
        try {
            let id = Number(req.params.id);

            let idUser = await this.getRestaurantIdUseCase.run(id)
            console.log(idUser)
            if ( idUser instanceof Error) {
               return res.status(409).send({
                    status: "Error",
                    data: idUser.message
                });
            } 
            if (idUser instanceof Restaurant){
                return res.status(201).send({
                    status:"success",
                    data:{
                        name_local:idUser.name_local,
                        description: idUser.description,
                        gender: idUser.gender,
                        image: idUser.image,
                        address: idUser.address,
                        coordinate: idUser.coordinate,
                        status: idUser.status,
                        user_id: idUser.user_id,
                    }
                })
            }else{
                return res.status(500).send({
                    status:"error",
                    message:"An unexpected error occurred restaurant"
                })
            }
        } catch (error) {
            return null;
        }
    }
}
