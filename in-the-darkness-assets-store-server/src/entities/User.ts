import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Skin } from "./Skin";
import { Comment } from "./Comment";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email:string

    @Column({unique:true})
    nick:string

    @Column()
    password:string

    @OneToMany(()=>Skin, (skin)=>skin.creator)
    creations: Skin[]

    @OneToMany(()=>Comment, (comment)=>comment.user)
    comments: Comment[]

    @ManyToMany(()=>Skin, (skin)=>skin.subscribers)
    subscriptions: Skin[]

    @ManyToMany(()=>Skin, (skin)=>skin.liked)
    likes: Skin[]
}