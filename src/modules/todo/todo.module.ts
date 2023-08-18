import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([TodoEntity])
    ],
    controllers: [TodoController],
    providers: [{
        provide: 'TodoService',
        useClass: process.env.NODE_ENV == 'developer' ? TodoService : TodoService
    }],
})
export class TodoModule { };