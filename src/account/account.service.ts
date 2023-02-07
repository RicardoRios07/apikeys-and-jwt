import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { LeanDocument, Model } from "mongoose";
import { Account, AccountDocument } from "../schemas/account.schema";


@Injectable()
export class AccountService {
  
  constructor(@InjectModel("account") private readonly AccountModel: Model <AccountDocument>){ }

  async createAccount(email: string, password: string): Promise<Account> {
    console.log('********************************',password);

    return this.AccountModel.create({
      email,
      password,
    });
  }

  async getAccount(query: object ): Promise<Account> {
    console.log(query);
    
    return this.AccountModel.findOne(query);
}

async getAccounts(){
  return await this.AccountModel.find().lean().exec();
}

}