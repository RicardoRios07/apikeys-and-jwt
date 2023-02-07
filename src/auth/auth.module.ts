import { Module } from "@nestjs/common"
import { AccountModule } from "../account/account.module";
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { AccountService } from "../account/account.service";
import { MongooseModule } from "@nestjs/mongoose"
import { AccountSchema } from "../schemas/account.schema"
import { AuthController } from './auth.controller';
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { LocalStrategy } from "./strategy/local.strategy";



@Module({
  imports: [AccountModule, PassportModule, JwtModule.register({
    secret:  jwtConstants.secret,
    signOptions: { expiresIn: '1d' },
  }), MongooseModule.forFeature([{ name: "account", schema: AccountSchema }])],
  providers: [AuthService, AccountService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule { }