import { Component, OnInit, HostListener } from '@angular/core';
import { IMenu } from '@shared/interfaces';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {
  // go to top
  isShow: boolean;
  topPosToStartShowing = 20;
  menuItems: IMenu[];

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      {
        name: 'Home',
        icon: 'home',
        url: '/admin/admin-management'
      },
      {
        name: 'Product Management',
        icon: 'shopping_basket',
        childs: [
          {
            name: 'View all Products',
            icon: 'pageview',
            url: '/admin/viewproducts'
          },
          {
            name: 'Add a Product',
            icon: 'add_box',
            url: '/admin/addproduct'
          },
          {
            name: 'Update a Product',
            icon: 'edit',
            url: '/admin/updateproduct'
          },
          {
            name: 'Delete a Product',
            icon: 'delete',
            url: '/admin/deleteproduct'
          }
        ]
      },
      {
        name: 'User Management',
        icon: 'account_circle',
        childs: [
          {
            name: 'View Users',
            icon: 'people',
            url: '/admin/viewusers'
          },
          {
            name: 'Block User',
            icon: 'block',
            url: '/admin/blockuser'
          },
          {
            name: 'View Orders',
            icon: 'assignment',
            url: '/admin/vieworders'
          }
        ]
      }
    ];
  }
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
