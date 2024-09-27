import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Skin } from "./Skin.entity";
import { User } from "./User.entity";

@Entity()
export class Comment{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @ManyToOne(()=>Skin, (skin)=>skin.comments)
    skin: Skin

    @ManyToOne(()=>User, (user)=>user.comments)
    user: User
}