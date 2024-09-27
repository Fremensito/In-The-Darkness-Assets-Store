import { IComment } from "./IComment"
import { ISkin } from "./ISkin"

export interface IUser{

    id: number

    email:string

    nick:string

    password:string

    creations: ISkin[]

    comments: IComment[]

    subscriptions: ISkin[]

    likes: ISkin[]
}