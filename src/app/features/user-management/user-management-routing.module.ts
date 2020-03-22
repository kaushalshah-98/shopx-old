import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGaurdService } from "../../core/auth-management/auth-gaurd/auth-gaurd.service";
import { WishListComponent } from "./wish-list/wish-list.component";
import { ViewOrdersComponent } from "./view-orders/view-orders.component";
import { ProfileComponent } from "./profile/profile.component";
const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "wishlist",
    component: WishListComponent
  },
  {
    path: "my_orders",
    component: ViewOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {}
