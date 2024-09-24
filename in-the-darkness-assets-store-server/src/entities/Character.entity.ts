import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Skin } from "./Skin.entity";

@Entity()
export class Character{
    @PrimaryColumn()
    characterClass:string

    @Column({type: "bytea"})
    icon: Buffer
    
    @Column({type: "bytea"})
    defaultIdle: Buffer

    @Column({type: "bytea"})
    defaultWalk: Buffer

    @Column({type: "bytea"})
    defaultWeaponIdle:Buffer

    @Column({type: "bytea"})
    defaultWeaponWalk: Buffer

    @Column({type: "bytea"})
    defaultQ:Buffer

    @Column({type: "bytea"})
    defaultW: Buffer

    @OneToMany(()=>Skin, (skin)=>skin.character)
    images: Skin[]
}