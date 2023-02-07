import { AccountService } from "../account/account.service";
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly accountsService;
    private jwtService;
    private apiKeys;
    constructor(accountsService: AccountService, jwtService: JwtService);
    validateCredentials(email: string, password: string): Promise<any>;
    validateApiKey(apiKey: string): string;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
