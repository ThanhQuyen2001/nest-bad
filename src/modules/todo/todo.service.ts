import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "./todo.entity";
import { CreateTodoDto } from "../../interfaces/todo/create-todo.dto";
import { Repository } from "typeorm";
import { UpdateTodoDto } from "src/interfaces/todo/update-todo.dto";

@Injectable({
    scope: Scope.TRANSIENT
})
export class TodoService {
    constructor(@InjectRepository(TodoEntity) private readonly todoEntity: Repository<TodoEntity>) { }

    async createTodo(todo: CreateTodoDto) {
        let data = { ...todo, done: false }
        console.log(data);
        
        return await this.todoEntity.save(data)
    }

    async updateTodo(id: number, todo: UpdateTodoDto) {
        return await this.todoEntity.update({ id: id }, todo)
    }

    async getAllTotos() {
        return await this.todoEntity.find()
    }
}