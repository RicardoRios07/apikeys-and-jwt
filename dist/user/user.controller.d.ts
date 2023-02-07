import { UserService } from './user.service';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    uploadProfileImage(image: any): Promise<import("../schemas/user.schema").User>;
}
