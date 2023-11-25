import { Request, Response } from "express";
import { RestaurantData } from "../../domain/repositories/restaurantRepository";
import { CreateRestaurantCase } from "../../application/usesCase/createRestaurantUseCase";

export class RestaurantControllerCreate {
    constructor(
        readonly createRestaurantUseCase: CreateRestaurantCase
    ) { }

    async createRestaurant(req: Request, res: Response) {
        const data: RestaurantData = {
            name_local: req.body.name_local,
            description: req.body.description,
            gender: req.body.gender,
            image: req.file?.originalname ||'',
            address: req.body.address,
            coordinate:req.body.coordinate,
            status: req.body.status,
            user_id: req.body.user_id
        };
        try {
            const restaurantC = await this.createRestaurantUseCase.run(data)
            if (restaurantC != null) {
                res.status(200).send({
                    status: "success",
                    data: restaurantC
                });
            } else {
                res.status(400).send('I dont know, i create the restaurant')
            }
        } catch (error) {
            res.status(500).send({
                status: "error",
                data: "An error ocurred",
                message: error,
            });
        }
    }
}