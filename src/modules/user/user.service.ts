import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../../interfaces/user/user-create.dto";
import { UserEntity } from "./user.entity";
import { Repository } from 'typeorm';
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userEntity: Repository<UserEntity>) { }
    async createUser(user: CreateUserDto) {
        let data = this.userEntity.create(user)
        return await this.userEntity.save(data)
    }
    
    async getAllUser() {
        let data = await this.userEntity.find({
            select: ['firstname', 'lastname', 'age']
        })
        return data
    }
}