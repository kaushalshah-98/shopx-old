import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsCarouselComponent } from '@shared/authors-carousel/authors-carousel.component';
import { ContactComponent } from 'src/app/features/user-management/contact/contact.component';
import { AuthGaurdService } from '../../core/auth-management/auth-gaurd/auth-gaurd.service';
import { ProfileComponent } from './profile/profile.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'wishlist',
    component: WishListComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'my_orders',
    component: ViewOrdersComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: '^',
    component: AuthorsCarouselComponent
  },
  {
    path: '$',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
