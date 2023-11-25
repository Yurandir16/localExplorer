import { Request, Response } from "express";
import { MenuDataUpdate } from "../../domain/repositories/menuRepository";
import { updateMenuCase } from "../../application/updateMenuUseCase";

export class MenuControllerUpdate {
    constructor(
        readonly updateMenuUseCase: updateMenuCase
    ) { }

    async updateMenu(req: Request, res: Response) {
        const data: MenuDataUpdate = {
            pdf:req.file?.originalname ||'',
            retaurant_id:req.body.restarant_id
        };
        try {
            const menur = await this.updateMenuUseCase.run(data)
            if (menur != null) {
                res.status(200).send({
                    status: "success",
                    data: menur
                });
            } else {
                res.status(400).send('I dont know, i update the menu')
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