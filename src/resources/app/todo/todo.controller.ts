import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ResponseSuccess } from 'src/decorator/response-data/response-success.base';
import { TodoService } from './todo.service';
import { ResponseError } from 'src/decorator/response-data/response-error.base';
import { CreateTodoDto } from './todo-dto/create-todo.dto';
import { UpdateTodoDto } from './todo-dto/update-todo.dto';
import { Can } from 'src/decorator/permission/permission.decorator';

@Controller('todos')
export class TodoController {
    constructor(@Inject(TodoService) private readonly todoService: TodoService) { }

    @Get()
    @Can('list', 'todos')
    async getAllTodos() {
        try {
            return new ResponseSuccess<any>(await this.todoService.getAllTotos(), 200, 'ok')
        } catch (error) {
            return new ResponseError<any>(error, 400, 'not ok')
        }
    }
    @Post()
    @Can('create', 'todos')
    async createTodo(@Body() data: CreateTodoDto) {
        try {
            return new ResponseSuccess<any>(await this.todoService.createTodo(data), 200, 'ok')
        } catch (error) {
            return new ResponseError<any>(error, 400, 'not ok')
        }
    }

    @Put()
    @Can('update', 'todos')
    async updateTodo(@Param('id') id: number, @Body() data: UpdateTodoDto) {
        try {
            return new ResponseSuccess<any>(await this.todoService.updateTodo(id, data), 200, 'ok')
        } catch (error) {
            return new ResponseSuccess<any>(error, 400, 'not ok')
        }
    }
}