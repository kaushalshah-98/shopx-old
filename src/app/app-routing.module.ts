import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailviewComponent } from './features/product-management/detailview/detailview.component';
import { ProductcompareComponent } from './features/product-management/productcompare/productcompare.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGaurdService } from '@core/auth-management/auth-gaurd/auth-gaurd.service';

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
    path: 'compare',
    component: ProductcompareComponent
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin-management/admin-management.module').then(
        (m) => m.AdminManagementModule
      ),
      canLoad: [AuthGaurdService]
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
