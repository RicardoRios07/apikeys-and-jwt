import { IsNotEmpty } from "class-validator";

export class CreateAccountDto {
    @IsNotEmpty() id: string;
    @IsNotEmpty() username: string;
    @IsNotEmpty() password: string;

}


