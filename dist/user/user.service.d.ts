import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(username: string, password: string): Promise<User>;
    findOne(query: object): Promise<User>;
}
