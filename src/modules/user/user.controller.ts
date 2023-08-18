import { Body, Controller, Inject, Post, Get } from '@nestjs/common';
import { CreateUserDto } from '../../interfaces/user/user-create.dto';
import { ResponseSuccess } from 'src/utils/response-success.base';
import { UserService } from './user.service';
import { Can } from 'src/interceptors/permission/permission.decorator';
import { ResponseError } from 'src/utils/response-error.base';

@Controller('users')
export class UserController {
    constructor(@Inject('UserService') private userService: UserService) { }
    @Post()
    @Can('create', 'users')
    async createUser(@Body() body: CreateUserDto) {
        try {
            return new ResponseSuccess<any>(await this.userService.createUser(body), 200, 'ok')
        } catch (error) {
            return new ResponseError<any>(error, 403, 'not ok')
        }
    }

    @Get()
    @Can('list', 'users')
    async getAllUsers() {
        try {
            return new ResponseSuccess<any>(await this.userService.getAllUser(), 200, 'ok')
        } catch (error) {
            return new ResponseError<any>(error, 200, 'ok')

        }
    }
}