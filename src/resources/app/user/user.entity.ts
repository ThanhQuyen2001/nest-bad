import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
    name: 'users',
})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    age: number
}