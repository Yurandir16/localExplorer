import { Request, Response } from "express";
import { updateRestaurantCase } from "../../application/usesCase/updateRestaurantUseCase";
import { RestaurantDataUpdate } from "../../domain/repositories/restaurantRepository";

export class updateRestaurantController {
    constructor(
        readonly updateRestaurantUseCase: updateRestaurantCase
    ) { }

    async updateRestaurant(req: Request, res: Response) {
        const data: RestaurantDataUpdate = req.body;
        try { 
            const restaurantC = await this.updateRestaurantUseCase.run(data)
            console.log(restaurantC);
            if (restaurantC != null) {
                res.status(200).send({
                    status: "success",
                    datat : restaurantC
                });
            } else {
                res.status(400).send('I dont know, i update the restaurant')
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