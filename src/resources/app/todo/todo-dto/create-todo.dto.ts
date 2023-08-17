import { IsNumber } from "@nestjs/class-validator";
import { IsString } from "class-validator";

export class CreateTodoDto {
    @IsString()
    name: string

    @IsNumber()
    user_id: number
}