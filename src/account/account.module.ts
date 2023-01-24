import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/schemas/account.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: "account", schema: AccountSchema}])],
  providers: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
