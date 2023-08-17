import { Body, Controller, Inject, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './user-create.dto';
import { ResponseSuccess } from 'src/decorator/response-data/response-success.base';
import { UserService } from './user.service';
import { Can } from 'src/decorator/permission/permission.decorator';
import { ResponseError } from 'src/decorator/response-data/response-error.base';

let pagination = {
    page: 1,
    length: 12,
    total: 40
}

@Controller('users')
export class UserController {
    constructor(@Inject(UserService) private userService: UserService) { }
    @Post()
    @Can('create', 'users')
    async createUser(@Body() body: CreateUserDto) {
        try {
            return new ResponseSuccess<any>(await this.userService.createUser(body), pagination, 200, 'ok')
        } catch (error) {
            return new ResponseError<any>(error, 403, 'not ok')
        }
    }

    @Get()
    @Can('create', 'users')
    async getAllUsers() {
        try {
            return new ResponseSuccess<any>(await this.userService.getAllUser(), pagination, 200, 'ok')
        } catch (error) {
            return new ResponseError<any>(error, 200, 'ok')

        }
    }
}