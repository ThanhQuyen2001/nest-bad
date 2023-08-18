import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ResponseData } from 'src/helpers/response-data.helper';
import { TodoService } from './todo.service';
import { CreateTodoDto } from '../../interfaces/todo/create-todo.dto';
import { UpdateTodoDto } from 'src/interfaces/todo/update-todo.dto';
import { Can } from 'src/interceptors/guard/auth.decorator';

@Controller('todos')
export class TodoController {
    constructor(@Inject('TodoService') private readonly todoService: TodoService) { }

    @Get()
    @Can('list', 'todos')
    async getAllTodos() {
        try {
            return new ResponseData<any>(await this.todoService.getAllTotos(), 200, 'ok')
        } catch (error) {
            return new ResponseData<any>(error, 400, 'not ok')
        }
    }
    @Post()
    @Can('create', 'todos')
    async createTodo(@Body() data: CreateTodoDto) {
        try {
            return new ResponseData<any>(await this.todoService.createTodo(data), 200, 'ok')
        } catch (error) {
            return new ResponseData<any>(error, 400, 'not ok')
        }
    }

    @Put()
    @Can('update', 'todos')
    async updateTodo(@Param('id') id: number, @Body() data: UpdateTodoDto) {
        try {
            return new ResponseData<any>(await this.todoService.updateTodo(id, data), 200, 'ok')
        } catch (error) {
            return new ResponseData<any>(error, 400, 'not ok')
        }
    }
}