import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Skin } from "./Skin";

@Entity()
export class SkinPhoto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: Buffer

    @ManyToOne(()=>Skin, (skin)=>skin.photos)
    skin: number
}