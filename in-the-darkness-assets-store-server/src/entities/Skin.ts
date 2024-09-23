import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Character } from "./Character";
import { User } from "./User";
import { SkinPhoto } from "./SkinPhoto";
import { Comment } from "./Comment";

@Entity()
export class Skin{

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=>Character, (character)=>character.images)
    character: string

    @Column()
    name: string

    @Column()
    description: string

    @ManyToOne(()=>User, (user)=>user.creations)
    creator: number

    @OneToMany(()=>SkinPhoto, (photo) => photo.skin)
    photos: SkinPhoto[]

    @Column()
    idle: Buffer
    
    @Column()
    walk:Buffer

    @Column()
    idleWeapon: Buffer

    @Column()
    walkWeapon: Buffer

    @Column()
    q: Buffer

    @Column()
    w: Buffer

    @OneToMany(()=>Comment, (comment)=>comment.skin)
    comments: Comment[]

    @ManyToMany(()=>User, (user)=>user.subscriptions)
    @JoinTable({name: "subscription"})
    subscribers: User[]

    @ManyToMany(()=>User, (user)=>user.likes)
    @JoinTable({name: "like"})
    liked: User[]
}