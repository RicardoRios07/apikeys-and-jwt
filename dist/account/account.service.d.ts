import { Model } from "mongoose";
import { Account, AccountDocument } from "../schemas/account.schema";
export declare class AccountService {
    private readonly AccountModel;
    constructor(AccountModel: Model<AccountDocument>);
    createAccount(username: string, password: string): Promise<Account>;
    getAccount(query: object): Promise<Account>;
}
