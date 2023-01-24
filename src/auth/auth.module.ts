import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { AccountSchema } from "src/schemas/account.schema";
import { AccountModule } from "../account/account.module";
import { ApiKeyStrategy } from "./apiKey.strategy";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";


@Module({
  imports: [AccountModule, PassportModule,PassportModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1d' },
  }), 
  MongooseModule.forFeature([{ name: "account", schema: AccountSchema }])],
  providers: [AuthService, LocalStrategy, JwtStrategy, ApiKeyStrategy],
  controllers: [AuthController],
})
export class AuthModule { }