import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartManagementRoutingModule } from "./cart-management-routing.module";
import { ViewCartitemsComponent } from "./view-cartitems/view-cartitems.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SharedModule } from "@shared/shared.module";
import { CheckoutComponent } from "./checkout/checkout.component";
import { BillingComponent } from "./checkout/billing/billing.component";
import { PaymentComponent } from "./checkout/payment/payment.component";

@NgModule({
  declarations: [
    ViewCartitemsComponent,
    CheckoutComponent,
    BillingComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CartManagementRoutingModule,
    MatSidenavModule,
    SharedModule
  ]
})
export class CartManagementModule {
  constructor() {
    console.log("Lazily Loaded : CartModule");
  }
}
