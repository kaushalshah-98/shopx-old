import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FetchTvComponent } from './ProductCategories/Electronics/fetch-tv.component';
import { FetchLaptopComponent } from './ProductCategories/Electronics/fetch-laptop.component';
import { FetchHeadphonesComponent } from './ProductCategories/Electronics/fetch-headphones.component';
import { FetchTshirtComponent } from './ProductCategories/MensFashion/fetch-tshirt.component';
import { FetchShirtComponent } from './ProductCategories/MensFashion/fetch-shirt.component';
import { FetchShoesComponent } from './ProductCategories/MensFashion/fetch-shoes.component';
import { FetchSunglassComponent } from './ProductCategories/MensFashion/fetch-sunglass.component';
import { FetchAccessoriesComponent } from './ProductCategories/Mobiles/fetch-accessories.component';
import { FetchTabletsComponent } from './ProductCategories/Mobiles/fetch-tablets.component';
import { FetchSmartphonesComponent } from './ProductCategories/Mobiles/fetch-smartphones.component';
import { FetchSareeComponent } from './ProductCategories/WomensFashion/fetch-saree.component';
import { FetchDressComponent } from './ProductCategories/WomensFashion/fetch-dress.component';
import { FetchWatchComponent } from './ProductCategories/WomensFashion/fetch-watch.component';
import { FetchLadiesShoesComponent } from './ProductCategories/WomensFashion/fetch-ladies-shoes.component';
import { FetchLadiesNightwearComponent } from './ProductCategories/WomensFashion/fetch-ladies-nightwear.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { SharedModule } from '@shared/shared.module';

const components = [
  FetchTvComponent,
  FetchLaptopComponent,
  FetchHeadphonesComponent,
  FetchTshirtComponent,
  FetchShirtComponent,
  FetchShoesComponent,
  FetchSunglassComponent,
  FetchAccessoriesComponent,
  FetchTabletsComponent,
  FetchSmartphonesComponent,
  FetchSareeComponent,
  FetchDressComponent,
  FetchWatchComponent,
  FetchLadiesShoesComponent
];
@NgModule({
  declarations: [
    FetchTvComponent,
    FetchLaptopComponent,
    FetchHeadphonesComponent,
    FetchTshirtComponent,
    FetchShirtComponent,
    FetchShoesComponent,
    FetchSunglassComponent,
    FetchAccessoriesComponent,
    FetchTabletsComponent,
    FetchSmartphonesComponent,
    FetchSareeComponent,
    FetchDressComponent,
    FetchWatchComponent,
    FetchLadiesShoesComponent,
    FetchLadiesNightwearComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    ProductManagementRoutingModule,
    MatIconModule,
    SharedModule
  ],
  exports: [components]
})
export class ProductManagementModule {
  constructor() {
    console.log('Lazily Loaded : ProductModule');
  }
}
