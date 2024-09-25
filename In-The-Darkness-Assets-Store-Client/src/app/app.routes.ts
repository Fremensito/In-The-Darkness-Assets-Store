import { Routes } from '@angular/router';
import { adminRoutes } from './admin/admin.routes';

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
  {
    path: 'admin',
    children: adminRoutes,
    loadComponent: () => import('./admin/admin.page').then( m => m.AdminPage)
  },
];
