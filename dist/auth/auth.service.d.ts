import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../account/account.service';
export declare class AuthService {
    private readonly accountsService;
    private jwtTokenService;
    private apiKeys;
    constructor(accountsService: AccountService, jwtTokenService: JwtService);
    validateCredentials(username: string, password: string): Promise<any>;
    validateApiKey(apiKey: string): string;
    loginWithCredentials(account: any): Promise<{
        access_token: string;
    }>;
}
