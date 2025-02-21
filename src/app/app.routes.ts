import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/user-list/user-list.routing').then(m => m.usersRouts),
  },
  {
    path: 'create',
    loadComponent: () => 
      import('./pages/create-user/create-user.component').then(r => r.CreateUserComponent)
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
