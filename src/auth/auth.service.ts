import { Injectable, NotAcceptableException } from '@nestjs/common';
import { AccountService } from "../account/account.service";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    private apiKeys: string[] = [
        "ca03na188ame03u1d78620de67282882a84",
        "d2e621a6646a4211768cd68e26f21228a81",
    ];

    constructor(private readonly accountsService: AccountService, private jwtService: JwtService) { }

    async validateCredentials(email: string, password: string): Promise<any> {
        const user = await this.accountsService.getAccount({ email });
        console.log(user);
        
        if (!user) {
            throw new NotAcceptableException('No se pudo encontrar la cuenta');
        }
        
        const passwordValid = await bcrypt.compare(password, user.password)
        console.log(passwordValid);
        
        if (!passwordValid) {
            throw new NotAcceptableException('Contraseña incorrecta');
        }
        return user;
    }

    validateApiKey(apiKey: string) {
        return this.apiKeys.find(apiK => apiKey === apiK);
    }


    async login(user: any) {
        const payload = { email: user.email, sub: user.Id };
        return {
            access_token: this.jwtService.sign(payload),          
        };
        
    }
}