import { IsString, IsNumber } from "@nestjs/class-validator"

export class CreateUserDto {

    @IsString()
    firstname: string

    @IsString()
    lastname: string

    @IsNumber()
    age: number
}