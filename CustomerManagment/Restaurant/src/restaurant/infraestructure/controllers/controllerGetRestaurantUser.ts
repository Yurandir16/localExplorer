import { Request, Response } from "express";
import { getRestaurantUserCase } from "../../application/usesCase/getRestaurantUserUseCase";

export class RestaurantControllerGetUser {
    constructor(
        readonly getRestaurantIdUseCase: getRestaurantUserCase
    ) { }

    async getRestaurantUser(req: Request, res: Response) {
        const user = String(req.params.user);
        try {
            const restaurantC = await this.getRestaurantIdUseCase.run(user)
            if (restaurantC != null) {
                res.status(200).send({
                    status: "success",
                    data: restaurantC
                });
            } else {
                res.status(400).send('I dont know, i get the restaurant for user')
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