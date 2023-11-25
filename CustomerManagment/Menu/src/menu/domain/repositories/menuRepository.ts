import { Menu } from "../entities/menu";

export interface MenuRepository {
    createMenu(menu:MenuData): Promise<Menu | null | string | Error> ;
    getMenu(): Promise<Menu[]|null|string|Error>;
    updateMenu(menu:MenuDataUpdate): Promise <Menu|null|string|Error>;
    //getPdfMenu(name_pdf): Promise <Menu|null|string|Error>;
}

export interface MenuData{
    pdf:string,
    retaurant_id:number
}

export interface MenuDataUpdate{
    pdf:string,
    retaurant_id:number
}