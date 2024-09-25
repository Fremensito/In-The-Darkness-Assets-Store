import { Routes } from "@angular/router";

export const adminRoutes: Routes = [
    {
        path: '',
        redirectTo: "newcharacter",
        pathMatch: 'full',
    },
    {
        path: "newcharacter",
        loadComponent: ()=>import("./new-character/new-character.page").then(m => m.NewCharacterPage)
    }
]