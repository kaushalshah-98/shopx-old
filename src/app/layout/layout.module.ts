import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContentComponent } from '../layout/homepage/page-content/page-content.component';
import { CategoryCardComponent } from '../layout/homepage/page-content/category-card/category-card.component';
import { RouterModule } from '@angular/router';
import { ImageSliderComponent } from '../layout/homepage/page-content/image-slider/image-slider.component';
import { CategoryTilesComponent } from '../layout/homepage/page-content/category-tiles/category-tiles.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProductManagementModule } from '../features/product-management/product-management.module';
@NgModule({
  declarations: [
    HomepageComponent,
    PageContentComponent,
    CategoryCardComponent,
    ImageSliderComponent,
    CategoryTilesComponent
  ],
  imports: [CommonModule, ProductManagementModule, SharedModule, LayoutRoutingModule, RouterModule]
})
export class LayoutModule {
  constructor() {
    console.log('Lazily Loaded : Layout');
  }
}
