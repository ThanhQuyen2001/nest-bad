import { IsBoolean } from "@nestjs/class-validator";
import { IsString } from "class-validator";

export class UpdateTodoDto {
    @IsString()
    name: string

    @IsBoolean()
    done: boolean
}