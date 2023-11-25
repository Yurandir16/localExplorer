import { Request, Response } from "express";
import { getMenuCase } from "../../application/getMenuUseCase";

export class MenuControllerGet {
    constructor(
        readonly getMenuUseCase: getMenuCase
    ) { }

    async getMenu(req: Request, res: Response) {
        try {
            const menur = await this.getMenuUseCase.run()
            if (menur != null) {
                res.status(200).send({
                    status: "success",
                    data: menur
                });
            } else {
                res.status(400).send('I dont know, i get the menu')
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