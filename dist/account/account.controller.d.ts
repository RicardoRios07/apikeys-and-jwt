import { AccountService } from './account.service';
import { Account } from '../schemas/account.schema';
export declare class AccountController {
    private readonly usersService;
    constructor(usersService: AccountService);
    createAccount(password: string, username: string): Promise<Account>;
}
