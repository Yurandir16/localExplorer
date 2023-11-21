import { IsString, IsUUID, Length, IsBoolean, IsNotEmpty, ValidateIf, IsIn, IsOptional,IsEmail} from 'class-validator';
export class ValidatorRegisterUser {
    @IsNotEmpty()
    @IsUUID()
    public id: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    public name: string;

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    @Length(10) 
    public phone: string;

    @IsNotEmpty()
    @IsString()
    public pass: string;

   

    constructor(
        id: string,
        name: string,
        email: string,
        phone: string,
        pass: string,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.pass = pass;
    }


}

export class ValidateLogin {
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public pass: string;

    constructor(
        email:string,
        pass:string,
    ){
        this.email = email,
        this.pass = pass
    }
}
