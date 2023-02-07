import { IsNotEmpty } from "class-validator";
import { FileInterceptor } from "@nestjs/platform-express";

export class CreateAccountDto {  
    @IsNotEmpty() email: string;
    @IsNotEmpty() password: string;


}


