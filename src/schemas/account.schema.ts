import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types, Schema as MongooseSchema } from "mongoose";
import { User } from "./user.schema";


export type AccountDocument = Account & Document;


@Schema()
export class Account {

    @Prop({required:true, unique:true})
    email: string;

    @Prop({required:true})
    password: string;

    @Prop({default: false})
    active_account: boolean;

    @Prop({type: MongooseSchema.Types.ObjectId, ref: "User"})
    user: User;

}

export const AccountSchema = SchemaFactory.createForClass(Account);