import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Character } from "./Character.entity";
import { User } from "./User.entity";
import { SkinPhoto } from "./SkinPhoto.entity";
import { Comment } from "./Comment.entity";

@Entity()
export class Skin{

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=>Character, (character)=>character.images)
    character: Character

    @Column()
    name: string

    @Column()
    description: string

    @ManyToOne(()=>User, (user)=>user.creations)
    creator: User

    @OneToMany(()=>SkinPhoto, (photo) => photo.skin)
    photos: SkinPhoto[]

    @Column({type: "bytea"})
    idle: string
    
    @Column({type: "bytea"})
    walk:string

    @Column({type: "bytea"})
    q: string

    @Column({type: "bytea"})
    w: string

    @OneToMany(()=>Comment, (comment)=>comment.skin)
    comments: Comment[]

    @ManyToMany(()=>User, (user)=>user.subscriptions)
    @JoinTable({name: "subscription"})
    subscribers: User[]

    @ManyToMany(()=>User, (user)=>user.likes)
    @JoinTable({name: "like"})
    liked: User[]
}