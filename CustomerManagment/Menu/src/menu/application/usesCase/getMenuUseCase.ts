import {MenuRepository } from "../../domain/repositories/menuRepository";
import { Menu } from "../../domain/entities/menu";

export class getMenuCase {
    constructor(readonly MenuRepo: MenuRepository){}
    async getMenu():Promise<Menu[]>{
        try {
            const menu = await this.MenuRepo.getMenu();
            return menu || [];
        } catch (error) {
            return [];
        }
    }
}    
