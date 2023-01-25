import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../account/account.service';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    private apiKeys: string[] = [
        "ca03na188ame03u1d78620de67282882a84",
        "d2e621a6646a4211768cd68e26f21228a81",
    ];

    constructor(private readonly accountsService: AccountService, private jwtTokenService: JwtService){}

    async validateCredentials(username: string, password: string): Promise<any> {
        const account = await this.accountsService.getAccount({username});
        console.log(account);

        if(!account) {
            throw new NotAcceptableException("No se pudo encontrar el usuario");
        }

        const passwordValid = await bcrypt.compare(password, account.password)
        console.log(passwordValid);

        if(!passwordValid) {
            throw new NotAcceptableException("Contraseña incorrecta");
        }

        if( account && passwordValid){
            return account;
        }
    }

    validateApiKey(apiKey: string) {
        return this.apiKeys.find(apiK => apiKey === apiK);
        }
        

   
    async loginWithCredentials(account: any) {
        const payload = { username: account.username, sub: account.userId };

        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }
}