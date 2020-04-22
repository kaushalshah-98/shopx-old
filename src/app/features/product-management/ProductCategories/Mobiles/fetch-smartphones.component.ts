import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ComparisonServiceService } from '@services/comparsion-service/comparison-service.service';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ProductManagementService } from '../../product-service/product-management.service';
@Component({
  selector: 'app-fetch-smartphones',
  template: `
    <div [ngClass]="{ chips: true, 'dark-chips': property.nightmode | async }">
      <mat-chip-list>
        <button mat-raised-button color="warn" (click)="compareitems()">
          {{ 'user.product.compare' | translate }}
        </button>
        &nbsp;&nbsp;&nbsp;
        <mat-chip *ngFor="let mobile of mobiles" (removed)="remove(mobile)">
          {{ mobile.name }}
          <mat-icon matChipRemove>cancel</mat-icon>
        </mat-chip>
      </mat-chip-list>
    </div>
    <div class="list-product-style">
      <app-jumbotron [Heading]="heading"></app-jumbotron>
      <app-filter-input (keyup)="onInputChanged($event.target.value)" (filter)="onFilter($event)">
      </app-filter-input>
      <app-spinner [loading]="dataLoading" class="centre-product-spinner"></app-spinner>
      <div [ngClass]="{ dimmed: dimmed }">
        <app-list-products
          (selectedMobile)="onMobileSelect($event)"
          [compare]="true"
          [productitems]="products"
        >
        </app-list-products>
      </div>
    </div>
  `,
  styles: []
})
export class FetchSmartphonesComponent implements OnInit {
  productitems: any[];
  heading = 'menu_item.smartphones';
  @Output() filter: EventEmitter<string> = new EventEmitter();
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  products: any[];
  mobiles = [];
  dimmed = false;
  innercategory = 'Smartphones';
  constructor(
    private productservice: ProductManagementService,
    private notification: NotificationService,
    private compare: ComparisonServiceService,
    private router: Router,
    public property: PropertyAccessService
  ) { }

  ngOnInit() {
    document.getElementById('mainsearch').style.visibility = 'hidden';
    this.mobiles = this.compare.comparelist;
    this.fetchproduct();
  }
  fetchproduct() {
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.productservice.getallproducts(this.innercategory).subscribe(
        (res) => {
          console.log(res);
          if (res === null || res === undefined) {
            this.notification.warning('Check Your Network!');
            this.notification.info('Try to reload the page!');
          } else {
            this.productitems = res;
            this.products = this.productitems;
          }
        },
        (error: HttpErrorResponse) => {
          this.dataLoading.emit(false);
          this.notification.error(error.message);
        },
        () => this.dataLoading.emit(false)
      );
    }, 1000);
  }
  compareitems() {
    if (this.mobiles.length < 1) {
      console.log('empty');
    } else if (this.mobiles.length < 2) {
      console.log('atleast two');
    } else {
      this.router.navigateByUrl('/compare');
    }
  }
  onMobileSelect(event: any) {
    if (this.mobiles.includes(event)) {
      console.log('it is there already');
    } else if (this.mobiles.length > 2) {
      console.log('only 3 allowed');
    } else {
      this.compare.comparelist.push(event);
      event.general.name = event.name;
      event.display.name = event.name;
      event.battery.name = event.name;
      event.storage.name = event.name;
      event.performance.name = event.name;
      event.design.name = event.name;
      event.camera.name = event.name;

      this.compare.general.push(event.general);
      this.compare.display.push(event.display);
      this.compare.battery.push(event.battery);
      this.compare.storage.push(event.storage);
      this.compare.performance.push(event.performance);
      this.compare.design.push(event.design);
      this.compare.camera.push(event.camera);
      this.mobiles = this.compare.comparelist;
      this.compare.features = [];
      this.compare.features.push(
        this.compare.general,
        this.compare.display,
        this.compare.design,
        this.compare.battery,
        this.compare.performance,
        this.compare.storage,
        this.compare.camera
      );
    }
  }
  remove(mobile): void {
    this.compare.comparelist = this.compare.comparelist.filter(
      (item) => !(item.name === mobile.name)
    );
    this.mobiles = this.compare.comparelist;
  }
  onFilter(event: any) {
    if (event === 'low') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (event === 'high') {
      this.products.sort((a, b) => b.price - a.price);
    } else {
      this.products.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  onInputChanged(input: string) {
    this.dimmed = true;
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.dimmed = false;
      this.products = this.productitems.filter((items) => {
        return items.name.toLowerCase().includes(input.toLowerCase());
      });
    }, 2000);
  }
}
