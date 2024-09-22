import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'in-game',
    loadComponent: () => import('./in-game/in-game.page').then( m => m.InGamePage)
  },
  {
    path: 'upload-assets',
    loadComponent: () => import('./upload-assets/upload-assets.page').then( m => m.UploadAssetsPage)
  },
];
