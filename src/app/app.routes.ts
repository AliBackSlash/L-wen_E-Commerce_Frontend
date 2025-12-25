import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Layouts/auth-layout/auth-layout').then((c) => c.AuthLayout),
    title: 'Auth Layout',
    children: [
      {
        path: '',
        loadComponent: () => import('./Pages/home/home').then((c) => c.Home),
        title: 'الصفحة الرئيسية',
      },
      {
        path: 'register',
        loadComponent: () => import('./Pages/register/register').then((c) => c.Register),
        title: 'إنشاء حساب',
      },
      {
        path: 'login',
        loadComponent: () => import('./Pages/login/login').then((c) => c.Login),
        title: 'تسجيل الدخول',
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./Pages/product-details/product-details').then((c) => c.ProductDetails),
        title: 'تفاصيل المنتج',
      },
      {
        path: 'cart',
        loadComponent: () => import('./Pages/cart/cart').then((c) => c.Cart),
        title: 'عربة التسوق',
      },
      {
        path: '**',
        loadComponent: () => import('./Pages/not-found/not-found').then((c) => c.NotFound),
        title: 'صفحة غير موجودة',
      },
    ],
  },
];
