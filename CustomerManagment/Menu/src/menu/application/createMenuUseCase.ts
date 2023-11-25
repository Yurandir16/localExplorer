import {MenuRepository,MenuData } from "../domain/repositories/menuRepository";

export class CreateMenuCase {
    constructor(readonly MenuRepo: MenuRepository){}
    async run(menu:MenuData){
        const menus = await this.MenuRepo.createMenu(menu);
        if(!menus){
            throw new Error("ALGO SALIO MAL CON MENU")
        }
        return menus;
    }
}    