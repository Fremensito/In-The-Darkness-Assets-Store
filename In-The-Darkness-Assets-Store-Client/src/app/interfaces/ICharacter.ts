import { ISkin } from "./ISkin"

export interface ICharacter{
    characterClass:string

    icon: string
    
    defaultIdle: string

    defaultWalk: string

    qIcon:string

    defaultQ:string

    wIcon: string

    defaultW: string

    images: ISkin[]
}