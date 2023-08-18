import { Body, Controller, Inject, Post, Get } from '@nestjs/common';
import { CreateUserDto } from '../../interfaces/user/user-create.dto';
import { ResponseData } from 'src/helpers/response-data.helper';
import { UserService } from './user.service';
import { Can } from 'src/interceptors/guard/auth.decorator';

@Controller('users')
export class UserController {
    constructor(@Inject('UserService') private userService: UserService) { }
    @Post()
    @Can('create', 'users')
    async createUser(@Body() body: CreateUserDto) {
        try {
            return new ResponseData<any>(await this.userService.createUser(body), 200, 'ok')
        } catch (error) {
            return new ResponseData<any>(error, 403, 'not ok')
        }
    }

    @Get()
    @Can('list', 'users')
    async getAllUsers() {
        try {
            return new ResponseData<any>(await this.userService.getAllUser(), 200, 'ok')
        } catch (error) {
            return new ResponseData<any>(error, 200, 'ok')

        }
    }
}