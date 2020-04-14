import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewCartitemsComponent } from './view-cartitems/view-cartitems.component';

const routes: Routes = [
  {
    path: '',
    component: ViewCartitemsComponent
  },
  {
    path: '#',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartManagementRoutingModule {}
