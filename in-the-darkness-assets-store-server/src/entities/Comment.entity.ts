import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Skin } from "./Skin.entity";
import { User } from "./User.entity";

@Entity()
export class Comment{

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=>Skin, (skin)=>skin.comments)
    skin: number

    @ManyToOne(()=>User, (user)=>user.comments)
    user: number
}