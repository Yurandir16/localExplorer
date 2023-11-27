import { Menu } from "../entities/menu";

export interface MenuRepository {
    createMenu(pdf:string,restaurant_id:number): Promise<Menu | null | string | Error> ;
    getMenu(): Promise<Menu[]>;
    UpdateMenu(id:number,pdf:string, restaurant_id:number): Promise <Menu|null|string|Error>;
}
