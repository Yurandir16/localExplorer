import { IsInt,IsString, IsUUID, Length, IsBoolean, IsNotEmpty, ValidateIf, IsIn, IsOptional,IsEmail} from 'class-validator';

export class ValidatorCreateReview {
    // @IsNotEmpty()
    // @IsInt()
    // public id: number;

    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    public message: string

    @IsNotEmpty()
    @IsUUID()
    public userId: string;

    constructor(
        // id: number,
        message: string,
        userId: string,
    ){
        // this.id = id;
        this.message = message;
        this.userId = userId;
    }

}