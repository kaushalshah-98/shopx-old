import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManagementRoutingModule } from './admin-management-routing.module';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { SharedModule } from '@shared/shared.module';
import { ViewUsersComponent } from './user-components/view-users/view-users.component';
import { BlockUserComponent } from './user-components/block-user/block-user.component';
import { ViewProductsComponent } from './product-components/view-products/view-products.component';
import { AddProductComponent } from './product-components/add-product/add-product.component';
import { UpdateProductComponent } from './product-components/update-product/update-product.component';
import { DeleteProductComponent } from './product-components/delete-product/delete-product.component';
import { ContentComponent } from './adminpage/content/content.component';
import { ViewUserOrderComponent } from './user-components/view-user-order/view-user-order.component';
@NgModule({
  declarations: [
    AdminpageComponent,
    ViewUsersComponent,
    BlockUserComponent,
    ViewProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ContentComponent,
    ViewUserOrderComponent
  ],
  imports: [CommonModule, SharedModule, AdminManagementRoutingModule]
})
export class AdminManagementModule {
  constructor() {
    console.log('Lazily Loaded : Admin');
  }
}
