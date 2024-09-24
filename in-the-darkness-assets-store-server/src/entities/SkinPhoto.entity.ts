import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Skin } from "./Skin.entity";

@Entity()
export class SkinPhoto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "bytea"})
    data: Buffer

    @ManyToOne(()=>Skin, (skin)=>skin.photos)
    skin: number
}