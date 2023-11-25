export class Restaurant {
    constructor(
    readonly id:number,
    readonly name_local: string,
    readonly description: string,
    readonly gender:string,
    readonly image: string,
    readonly address: string,
    readonly coordinate:string,
    readonly status:boolean,
    readonly user_id: number
    ){}
}