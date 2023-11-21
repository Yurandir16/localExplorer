import { Request, Response } from "express";
import { RestaurantData } from "../../domain/repositories/restaurantRepository";
import { getRestaurantCase } from "../../application/getrestaurantUseCase";

export class RestaurantControllerGet {
    constructor(
        readonly getRestaurantUseCase: getRestaurantCase
    ) { }

    async getRestaurant(req: Request, res: Response) {
        try {
            const restaurantC = await this.getRestaurantUseCase.run()
            if (restaurantC != null) {
                res.status(200).send({
                    status: "success",
                    data: restaurantC
                });
            } else {
                res.status(400).send('I dont know, i get the restaurant')
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