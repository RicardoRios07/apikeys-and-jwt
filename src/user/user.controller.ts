import { Controller, UseInterceptors, Post, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService){}

    @Post("/upload-profileImage")
    @UseInterceptors(FileInterceptor("image"))

    async uploadProfileImage(@UploadedFile()image) {
        const user = await this.usersService.findOne({ci_user: "ci_user"})
        user.profileImage = image.filename;
        return user;
    }

}
