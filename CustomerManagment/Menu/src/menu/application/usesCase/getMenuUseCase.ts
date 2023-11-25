import {MenuRepository } from "../../domain/repositories/menuRepository";

export class getMenuCase {
    constructor(readonly MenuRepo: MenuRepository){}
    async run(){
        const menus = await this.MenuRepo.getMenu();
        if(!menus){
            throw new Error("ALGO SALIO MAL CON MENU")
        }
        return menus;
    }
}    