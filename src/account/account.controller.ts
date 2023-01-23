import { Body, Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from '../schemas/account.schema';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AccountController {
    constructor(private readonly usersService: AccountService) { }

    @Post('/signup')
    @UseGuards(AuthGuard("api-key"))
    async createAccount(
        @Body('password') password: string,
        @Body('username') username: string,
    ): Promise<Account> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        const result = await this.usersService.createAccount(
            username,
            hashedPassword,
        );
        return result;
    }
    
}
