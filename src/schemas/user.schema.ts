import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";



export type UserDocument = User & Document;

@Schema({timestamps:true})
export class User {

    constructor(private readonly maxSizeFile = 1 * 50024 * 50024,
        extensiones =  ["jpg", "jṕeg","png"]){}

    @Prop({required:true})
    name_user: string;

    @Prop({required: true})
    last_name_user: string;
   
    @Prop({required: true, unique: true})
    ci_user: string;

    @Prop({type:String,enum: ["superadmin","admin", "client"]})
    type_user: string;

    @Prop({enum: ["masculino", "femenino", "otro"]})
    gender_user: string;

    @Prop()
    phone_user: string;

    @Prop()
    birthday_user: Date;

    @Prop({required:false})
    profileImage: string;
    

}

export const UserSchema = SchemaFactory.createForClass(User);
