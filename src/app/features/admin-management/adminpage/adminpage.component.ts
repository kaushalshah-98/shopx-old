import { Component, OnInit } from '@angular/core';
import { IMenu } from '@shared/interfaces';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {
  menuItems: IMenu[];

  constructor(private property: PropertyAccessService) {}

  ngOnInit() {
    this.menuItems = [
      {
        name: 'Home',
        icon: 'home',
        url: '/admin/admin-management'
      },
      {
        name: 'product_management',
        icon: 'shopping_basket',
        childs: [
          {
            name: 'view_all_products',
            icon: 'pageview',
            url: '/admin/viewproducts'
          },
          {
            name: 'add_a_product',
            icon: 'add_box',
            url: '/admin/addproduct'
          },
          {
            name: 'update_a_product',
            icon: 'edit',
            url: '/admin/updateproduct'
          },
          {
            name: 'delete_a_product',
            icon: 'delete',
            url: '/admin/deleteproduct'
          }
        ]
      },
      {
        name: 'user_management',
        icon: 'account_circle',
        childs: [
          {
            name: 'view_user',
            icon: 'people',
            url: '/admin/viewusers'
          },
          {
            name: 'block_user',
            icon: 'block',
            url: '/admin/blockuser'
          },
          {
            name: 'view_orders',
            icon: 'assignment',
            url: '/admin/vieworders'
          }
        ]
      }
    ];
  }
  fullscreenstatus(event) {
    if (event) this.property.height.next(540);
    else this.property.height.next(405);
  }
}
