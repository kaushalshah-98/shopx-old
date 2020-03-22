import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product, sliderProduct } from '@shared/interfaces';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  categoryitems: Product[];
  items_category1: Product[];
  items_category2: Product[];
  items_slider1: sliderProduct[];
  items_slider2: sliderProduct[];
  show: boolean;
  heading = 'HOMEPAGE';
  constructor() {}

  ngOnInit() {
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.show = true;
      // items for category component
      this.categoryitems = [
        {
          name: "Men's casual shoes | Under ₹599",
          image:
            'https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/sh1x._SY304_CB426335760_.jpg',
          url: '/mens_ेपदाे'
        },
        {
          name: 'Top Brands in TVs | Up to 50% off ',
          image:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/GW/DCQC/186x116_4._SY116_CB421822463_.jpg',
          url: '/televisions'
        },
        {
          name: 'Mobile accessories | starting ₹99',
          image:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MobileAccessories/MSO/DashboardCards/Uber/Cable_2x._SY116_CB446812015_.jpg',
          url: '/mobile_accessories'
        }
      ];

      // items for category-card component
      this.items_category1 = [
        {
          name: 'Iphone',
          image:
            'https://easetemplate.com/free-website-templates/mobistore/images/display_img_2.png',
          url: '/smartphones'
        },
        {
          name: 'Samsung',
          image:
            'https://easetemplate.com/free-website-templates/mobistore/images/display_img_3.png',
          url: '/smartphones'
        }
      ];
      this.items_category2 = [
        {
          name: 'Laptops',
          image:
            'https://store.hp.com/app/assets/images/product/3JE20AV_1/center_facing.png?_=1562933961449',
          url: '/laptops'
        },
        {
          name: 'Headphones',
          image:
            'https://www.plantronics.com/content/dam/plantronics/products/backbeat/backbeat-pro-2-black.png',
          url: '/headphones'
        },
        {
          name: 'Mens Fashion',
          image: 'https://i.pinimg.com/originals/8e/cd/27/8ecd27425563e902e541e1489b9ff355.jpg',
          url: '/mens_shirts'
        },
        {
          name: 'Womens Fashion',
          image: 'https://img1.eshakti.com/clothImages/cl0071618ML.jpg?w=1480',
          url: '/womens_saree'
        }
      ];

      this.items_slider1 = [
        {
          name: 'Hush Pupppies Shoes',
          description: 'Shoes made for your Comfort and style',
          image:
            'https://www.hushpuppies.com/on/demandware.static/-/Sites-hushpuppies_us-Library/default/dw06306caa/content/seasonal-content/homepage/2020/01/Mobile-Hero-Image.jpg'
        },
        {
          name: 'Mens Outfit',
          description: 'Outfit for mens',
          image:
            'https://image.winudf.com/v2/image1/Y29tLmR0ZWNoLm11bHRpYWNjZXNzLm1lbnNmYXNoaW9uMjAxN19zY3JlZW5fNl8xNTUxMTE5ODI1XzA5Ng/screen-6.jpg?fakeurl=1&type=.jpg'
        }
      ];
      this.items_slider2 = [
        {
          name: 'Dress',
          description: 'HIGH LOW FLORAL DRESS',
          image: 'https://photo.venus.com/im/18062700.jpg?preset=product'
        },
        {
          name: 'Ladies Watch',
          description: 'Womens casual waterfproof Watch',
          image: 'https://thegadgetflow.com/wp-content/uploads/2017/09/Luxury-Womens-Watch-01.jpg'
        }
      ];
    }, 1000);
  }
}
