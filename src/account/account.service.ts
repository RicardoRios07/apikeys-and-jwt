import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model, sanitizeFilter } from "mongoose";
import { Account, AccountDocument, AccountSchema } from "../schemas/account.schema";


@Injectable()
export class AccountService {
  constructor(@InjectModel("account") private readonly AccountModel: Model <AccountDocument>){ }

  async createAccount(username: string, password: string): Promise<Account> {
    console.log(password);

    return this.AccountModel.create({
      username,
      password,
    });
  }

  async getAccount(query: object ): Promise<Account> {
    console.log(query);
    
    return this.AccountModel.findOne(query);
}

}