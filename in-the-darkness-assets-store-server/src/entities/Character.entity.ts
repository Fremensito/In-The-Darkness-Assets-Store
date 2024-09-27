import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Skin } from "./Skin.entity";

@Entity()
export class Character{
    @PrimaryColumn()
    characterClass:string

    @Column({type: "bytea"})
    icon: string
    
    @Column({type: "bytea"})
    defaultIdle: string

    @Column({type: "bytea"})
    defaultWalk: string

    @Column({type: "bytea"})
    qIcon:string

    @Column({type: "bytea"})
    defaultQ:string

    @Column({type: "bytea"})
    wIcon: string

    @Column({type: "bytea"})
    defaultW: string

    @OneToMany(()=>Skin, (skin)=>skin.character)
    images: Skin[]
}