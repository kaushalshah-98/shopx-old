import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuitemsComponent } from './left-panel/menuitems/menuitems.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ConfirmDialogService } from './confirm-dialog/confirm-dialog.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListProductsComponent } from './list-products/list-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingBarModule } from './loading-bar/loading-bar.module';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { ImagePopupService } from './image-popup/image-popup.service';
import { QuickviewComponent } from './quickview/quickview.component';
import { QuickViewService } from './quickview/quickview.service';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LeftPanelContainer } from './left-panel/left-panel.container';
import { TranslateModule } from '@ngx-translate/core';
import { BigInputActionComponent } from './big-input/big-input-action/big-input-action.component';
import { BigInputComponent } from './big-input/big-input/big-input.component';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ReviewsViewerComponent } from './reviews-viewer/reviews-viewer.component';
import { SharedRoutingModule } from './shared-routing.module';
import { DescriptionViewerComponent } from './description-viewer/description-viewer.component';
import { AuthorsCarouselComponent } from './authors-carousel/authors-carousel.component';
import { ProductCarousel2Component } from './product-carousel2/product-carousel2.component';

@NgModule({
  declarations: [
    ProductCarousel2Component,
    AuthorsCarouselComponent,
    DescriptionViewerComponent,
    ReviewsViewerComponent,
    ImageViewerComponent,
    FilterInputComponent,
    LeftPanelContainer,
    MenuitemsComponent,
    JumbotronComponent,
    QuickviewComponent,
    ImagePopupComponent,
    ConfirmDialogComponent,
    ListProductsComponent,
    SpinnerComponent,
    NavbarComponent,
    FooterComponent,
    BigInputActionComponent,
    BigInputComponent
  ],
  imports: [
    SharedRoutingModule,
    CommonModule,
    TranslateModule,
    NgxImageZoomModule.forRoot(),
    MaterialModule,
    RouterModule,
    LoadingBarModule,
    FlexLayoutModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
  ],
  providers: [ConfirmDialogService, ImagePopupService, QuickViewService],
  entryComponents: [ConfirmDialogComponent, ImagePopupComponent, QuickviewComponent],
  exports: [
    ProductCarousel2Component,
    AuthorsCarouselComponent,
    DescriptionViewerComponent,
    ReviewsViewerComponent,
    ImageViewerComponent,
    FilterInputComponent,
    LeftPanelContainer,
    FooterComponent,
    JumbotronComponent,
    LoadingBarModule,
    NgxImageZoomModule,
    QuickviewComponent,
    MenuitemsComponent,
    ImagePopupComponent,
    NavbarComponent,
    ListProductsComponent,
    SpinnerComponent,
    BigInputActionComponent,
    BigInputComponent,

    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule
  ]
})
export class SharedModule {}
