import { Request, Response } from "express";
import { getMenuCase } from "../../application/usesCase/getMenuUseCase";

export class MenuControllerGet {
    constructor(
        readonly getMenuUseCase: getMenuCase
    ) { }

    async getMenu(req: Request, res: Response) {
        try {
            const menu = await this.getMenuUseCase.getMenu();
            if (menu && menu.length > 0) {
                return res.status(200).send({
                    status: "success",
                    data: menu,
                    message: 'List menu correct'
                });
            }
            return res.status(404).json({
                status: 'error',
                message: 'No se encontraron menus',
            });
        } catch (error) {
            if (error instanceof Error) {
    
                if (error.message.startsWith('[')) {
                  
                  return res.status(400).send({
                    status: "error",
                    message: "Validation failed",
                    errors: JSON.parse(error.message)
                  });
                }
              }
              return res.status(500).send({
                status: "error",
                message: "An error occurred."
              });
        }
    }
}