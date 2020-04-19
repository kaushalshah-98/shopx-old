import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewCartitemsComponent } from './view-cartitems/view-cartitems.component';
import { AuthGaurdService } from '@core/auth-management/auth-gaurd/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    component: ViewCartitemsComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: '#',
    component: CheckoutComponent,
    canActivate: [AuthGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartManagementRoutingModule {}
