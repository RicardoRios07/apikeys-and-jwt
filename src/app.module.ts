import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AccountModule, AuthModule,
  MongooseModule.forRoot("mongodb://127.0.0.1:27017",{
    dbName:"apik",
    directConnection:true,
    serverSelectionTimeoutMS:2000
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
