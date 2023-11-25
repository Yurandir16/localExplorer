import { Request, Response } from "express";
import { getRestaurantIdCase } from "../../application/usesCase/getRestaurantIdUseCase";

export class RestaurantControllerGetId {
    constructor(
        readonly getRestaurantIdUseCase: getRestaurantIdCase
    ) { }

    async getRestaurantId(req: Request, res: Response) {
        const id = Number(req.params.id);
        
        try {
            const restaurantC = await this.getRestaurantIdUseCase.run(id)
            if (restaurantC != null) {
                res.status(200).send({
                    status: "success",
                    data: restaurantC
                });
            } else {
                res.status(400).send('I dont know, i get the restaurant for id')
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