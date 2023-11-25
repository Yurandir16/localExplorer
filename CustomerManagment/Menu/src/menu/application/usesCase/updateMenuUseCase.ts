import {MenuRepository,MenuDataUpdate } from "../../domain/repositories/menuRepository";

export class updateMenuCase {
    constructor(readonly MenuRepo: MenuRepository){}
    async run(menu:MenuDataUpdate){
        const menus = await this.MenuRepo.updateMenu(menu);
        if(!menus){
            throw new Error("ALGO SALIO MAL CON MENU")
        }
        return menus;
    }
}    