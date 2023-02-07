import { Body, Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from '../schemas/account.schema';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('account')
export class AccountController {
    constructor(private readonly usersService: AccountService) { }

    @Post('/signup')
    //@UseGuards(AuthGuard("local"))
    async createAccount(
        @Body('password') password: string,
        @Body('email') email: string,
    ): Promise<Account> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        console.log('CREANDO CUENTA');
        
        const result = await this.usersService.createAccount(
            email,
            hashedPassword,
        );
        return result;
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async getAccounts(
    ) {
        return this.usersService.getAccounts()
    }
    
}
