import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../account/account.service';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private accountsService: AccountService, private jwtTokenService: JwtService){}

    async validateCredentials(username: string, password: string): Promise<any> {
        const account = await this.accountsService.getAccount({username});
        console.log(account);

        if(!account) {
            throw new NotAcceptableException("No se pudo encontrar e usuario");
        }

        const passwordValid = await bcrypt.compare(password, account.password)
        console.log(passwordValid);

        if(!passwordValid) {
            throw new NotAcceptableException("Contraseña incorrecta");
        }

        return 
    }

    async loginWithCredentials(user: any) {
        const payload = { username: user.username, sub: user.userId };

        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }
}