import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewCartitemsComponent } from "./view-cartitems/view-cartitems.component";
import { CheckoutComponent } from "./checkout/checkout.component";

const routes: Routes = [
  {
    path: "",
    component: ViewCartitemsComponent
  },
  {
    path: "#",
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartManagementRoutingModule {}
