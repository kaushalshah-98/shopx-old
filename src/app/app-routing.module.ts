import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { DetailviewComponent } from './features/product-management/detailview/detailview.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)
  },
  {
    path: 'detailview',
    component: DetailviewComponent
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin-management/admin-management.module').then(
        (m) => m.AdminManagementModule
      )
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/auth-management/auth-management.module').then((m) => m.AuthManagementModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./core/auth-management/auth-management.module').then((m) => m.AuthManagementModule)
  },
  {
    path: 'forgot_passoword',
    loadChildren: () =>
      import('./core/auth-management/auth-management.module').then((m) => m.AuthManagementModule)
  },
  {
    path: 'contactus',
    loadChildren: () =>
      import('./features/user-management/user-management.module').then(
        (m) => m.UserManagementModule
      )
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart-management/cart-management.module').then(
        (m) => m.CartManagementModule
      )
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./features/cart-management/cart-management.module').then(
        (m) => m.CartManagementModule
      )
  },
  {
    path: 'usersettings',
    loadChildren: () =>
      import('./features/user-management/user-management.module').then(
        (m) => m.UserManagementModule
      )
  },
  {
    path: 'creators',
    loadChildren: () =>
      import('./features/user-management/user-management.module').then(
        (m) => m.UserManagementModule
      )
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true,
      scrollPositionRestoration: 'enabled'
      // preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
