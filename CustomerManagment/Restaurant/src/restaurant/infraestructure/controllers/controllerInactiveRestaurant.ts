import { Request, Response } from "express";
import { inactiveRestaurantCase } from "../../application/usesCase/inactiveRestaurantUseCase";

export class inactiveRestaurantController {
    constructor(
        readonly inactiveRestaurantUseCase: inactiveRestaurantCase
    ) { }

    async inactiveRestaurant(req: Request, res: Response) {
        const id = Number(req.params.id);
        const status = Boolean(req.params.status);
        try {
            const restaurantC = await this.inactiveRestaurantUseCase.run(id,status)
            if (restaurantC != null) {
                res.status(200).send({
                    status: "success",
                    data: restaurantC
                });
            } else {
                res.status(400).send('I dont know, i inactive the restaurant')
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