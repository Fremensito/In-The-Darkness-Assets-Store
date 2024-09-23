import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Skin } from "./Skin";

@Entity()
export class Character{
    @PrimaryColumn()
    characterClass:string

    @Column()
    icon: Buffer
    
    @Column()
    defaultIdle: Buffer

    @Column()
    defaultWalk: Buffer

    @Column()
    defaultWeaponIdle:Buffer

    @Column()
    defaultWeaponWalk: Buffer

    @Column()
    defaultQ:Buffer

    @Column()
    defaultW: Buffer

    @OneToMany(()=>Skin, (skin)=>skin.character)
    images: Skin[]
}