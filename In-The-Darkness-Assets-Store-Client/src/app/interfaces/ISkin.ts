import { ISkinPhoto } from "./ISkinPhoto"
import { IUser } from "./IUser"

export interface ISkin{

    id: number

    character: string

    name: string

    description: string

    creator: number

    photos: ISkinPhoto[]

    idle: string
    
    walk:string

    q: string

    w: string

    comments: Comment[]

    subscribers: IUser[]

    liked: IUser[]
}