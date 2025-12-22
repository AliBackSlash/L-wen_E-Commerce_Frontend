import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Layouts/auth-layout/auth-layout').then((c) => c.AuthLayout),
    title: 'Auth Layout',
    children: [
      {
        path: '',
        loadComponent: () => import('./Pages/register/register').then((c) => c.Register),
        title: 'Register',
      },
    ],
  },
];
