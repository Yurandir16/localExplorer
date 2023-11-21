export class User {
    constructor(
    public id: string,
    public name: string,
    public phone: string,
    public email: string,
    public pass: string,
    ){}
}

export class ResponseLogin {
    constructor(
    public id: string,
    public name: string,
    public phone: string,
    public email: string,
    public pass: string,
    public token: string
    ){}
}
