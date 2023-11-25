import { Request, Response } from "express";
import { MenuData } from "../../domain/repositories/menuRepository";
import { CreateMenuCase } from "../../application/usesCase/createMenuUseCase";

export class MenuControllerCreate {
    constructor(
        readonly createMenuUseCase: CreateMenuCase
    ) { }

    async createRestaurant(req: Request, res: Response) {
        const data: MenuData = {
            pdf:req.file?.originalname ||'',
            retaurant_id:req.body.restaurant_id
        };
        try {
            const menur = await this.createMenuUseCase.run(data)
            if (menur != null) {
                res.status(200).send({
                    status: "success",
                    data: menur
                });
            } else {
                res.status(400).send('I dont know, i create the menu')
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