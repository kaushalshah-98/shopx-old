import { Component, OnInit } from '@angular/core';
import { IMenu } from '@shared/interfaces';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  // go to top
  menuItems: IMenu[];
  constructor() {}

  ngOnInit() {
    this.menuItems = [
      {
        name: 'Home',
        icon: 'home',
        url: '/home'
      },
      {
        name: 'Electronics',
        icon: 'developer_board',
        childs: [
          {
            name: 'TV',
            icon: 'tv',
            url: '/televisions'
          },
          {
            name: 'Laptop',
            icon: 'laptop',
            url: '/laptops'
          },
          {
            name: 'Headphones',
            icon: 'headset',
            url: '/headphones'
          }
        ]
      },
      {
        name: 'Mobile',
        icon: 'mobile_screen_share',
        childs: [
          {
            name: 'Accessories',
            icon: 'build',
            url: '/mobile_accessories'
          },
          {
            name: 'Tablets',
            icon: 'tablet',
            url: '/tablets'
          },
          {
            name: 'Smartphone',
            icon: 'mobile_friendly',
            url: '/smartphones'
          }
        ]
      },
      {
        name: 'Mens Fashion',
        icon: 'accessibility',
        childs: [
          {
            name: 'T-Shirts',
            url: '/mens_tshirts'
          },
          {
            name: 'Shirts',
            url: '/mens_shirts'
          },
          {
            name: 'Shoes',
            url: '/mens_shoes'
          },
          {
            name: 'Googles',
            url: '/mens_sunglasses'
          }
        ]
      },
      {
        name: 'Womens Fashion',
        icon: 'accessibility_new',
        childs: [
          {
            name: 'Sarees',
            url: '/womens_saree'
          },
          {
            name: 'Dress',
            url: '/womens_dress'
          },
          {
            name: 'Shoes',
            url: '/womens_shoes'
          },
          {
            name: 'Watch',
            url: '/womens_watch'
          },
          {
            name: 'Night-wear',
            url: '/womens_nightwear'
          }
        ]
      },
      {
        name: 'Multiple Level',
        icon: 'view_module',
        childs: [
          {
            name: 'Level-1',
            childs: [
              {
                name: 'Level-2',
                childs: [
                  {
                    name: 'Level-3',
                    childs: [
                      {
                        name: 'Level-4',
                        childs: [
                          {
                            name: 'Level-5',
                            url: '/trialurl9'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
}
