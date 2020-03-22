import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserManagementRoutingModule } from "./user-management-routing.module";
import { RegisterComponent } from "./register/register.component";
import { ViewProfileComponent } from "./profile/view-profile/view-profile.component";
import { EditProfileComponent } from "./profile/edit-profile/edit-profile.component";
import { SharedModule } from "@shared/shared.module";
import { WishListComponent } from "./wish-list/wish-list.component";
import { ViewOrdersComponent } from "./view-orders/view-orders.component";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  declarations: [
    RegisterComponent,
    ViewProfileComponent,
    EditProfileComponent,
    WishListComponent,
    ViewOrdersComponent,
    ProfileComponent
  ],
  imports: [CommonModule, UserManagementRoutingModule, SharedModule],
  exports: [ProfileComponent]
})
export class UserManagementModule {
  constructor() {
    console.log("Lazily Loaded : UserModule");
  }
}
