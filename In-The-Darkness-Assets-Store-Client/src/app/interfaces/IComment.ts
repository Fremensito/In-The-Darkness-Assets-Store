import { ISkin } from "./ISkin"
import { IUser } from "./IUser"

export interface IComment{
    id: number

    content: string

    skin: ISkin

    user: IUser
}