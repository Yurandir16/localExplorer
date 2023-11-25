import { Request, Response } from "express";
import { getLocationRestaurantCase } from "../../application/usesCase/getLocationRestaurant";

export class RestaurantLocationControllerGet {
    constructor(
        readonly getLocationRestaurantUseCase: getLocationRestaurantCase
    ) { }

    async getRestaurantlocation(req: Request, res: Response) {
        const location = String(req.body.location);
        try {
            const restaurantC = await this.getLocationRestaurantUseCase.run(location)
            if (restaurantC != null) {
                res.status(200).send({
                    status: "success",
                    data: restaurantC
                });
            } else {
                res.status(400).send('I dont know, i get the restaurants for location')
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