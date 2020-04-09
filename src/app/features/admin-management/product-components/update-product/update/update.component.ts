import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  state$: any;
  productdata: any;
  constructor(
    private dialog: ConfirmDialogService,
    private activateRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private property: PropertyAccessService
  ) { }
  category = [
    { name: 'Electronics' },
    { name: 'Mobile' },
    { name: 'MensFashion' },
    { name: 'WomensFashion' }
  ];
  InnerCategory = [
    { name: 'Accessories' },
    { name: 'Tablets' },
    { name: 'Smartphones' },
    { name: 'T-shirts' },
    { name: 'Shirt' },
    { name: 'Shoes' },
    { name: 'Goggles' },
    { name: 'TV' },
    { name: 'Laptop' },
    { name: 'Headphones' },
    { name: 'Saree' },
    { name: 'Dress' },
    { name: 'Shoes' },
    { name: 'Watch' },
    { name: 'Nightwear' }
  ];
  updateproductform: FormGroup;
  themestatus: boolean;

  ngOnInit() {
    this.property.nightmode.subscribe(res => this.themestatus = res);
    this.initializeform();
    this.state$ = this.activateRouter.paramMap
      .pipe(map(() => window.history.state))
      .subscribe((res) => (this.productdata = res));
  }
  initializeform() {
    this.updateproductform = this.formBuilder.group({
      selectedcategory: ['', [Validators.required]],
      selectedinnerCategory: ['', [Validators.required]],
      productNameFormControl: ['', [Validators.required]],
      quantityFormControl: [
        '',
        [Validators.required, Validators.pattern('[0-9]*'), Validators.min(1)]
      ],
      priceFormControl: [
        '',
        [Validators.required, Validators.pattern('[0-9]*'), Validators.min(1)]
      ],
      productDescriptionFormControl: ['', [Validators.required, Validators.minLength(10)]],
      productImage1FormControl: ['', [Validators.required]],
      productImage2FormControl: [''],
      productImage3FormControl: ['']
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.updateproductform.controls[controlName].hasError(errorName);
  }
  cancel() {
    if (this.updateproductform.touched) {
      this.dialog.showConfirmDialog('Are You Sure Want to Cancel ?').subscribe((result) => {
        if (result === 'yes') {
          this.updateproductform.reset();
        }
      });
    }
  }
  onCategorySelect(event) {
    this.updateproductform.controls.selectedinnerCategory.reset();
    switch (event.value) {
      case 'Electronics':
        this.InnerCategory = [{ name: 'TV' }, { name: 'Laptop' }, { name: 'Headphones' }];
        break;
      case 'Mobile':
        this.InnerCategory = [
          { name: 'Accessories' },
          { name: 'Tablets' },
          { name: 'Smartphones' }
        ];
        break;
      case 'MensFashion':
        this.InnerCategory = [
          { name: 'T-shirts' },
          { name: 'Shirts' },
          { name: 'Shoes' },
          { name: 'Goggles' }
        ];
        break;
      case 'WomensFashion':
        this.InnerCategory = [
          { name: 'Saree' },
          { name: 'Dress' },
          { name: 'Shoes' },
          { name: 'Watch' },
          { name: 'Nightwear' }
        ];
        break;
    }
  }
  UpdateProduct() {
    let productdata = {
      name: this.updateproductform.controls.productNameFormControl.value,
      description: this.updateproductform.controls.productDescriptionFormControl.value,
      quantity: this.updateproductform.controls.quantityFormControl.value,
      price: this.updateproductform.controls.priceFormControl.value,
      category: this.updateproductform.controls.selectedcategory.value,
      innercategory: this.updateproductform.controls.selectedinnerCategory.value,
      image1: this.updateproductform.controls.productImage1FormControl.value,
      image2: this.updateproductform.controls.productImage2FormControl.value || '',
      image3: this.updateproductform.controls.productImage3FormControl.value || ''
    };
    console.log(productdata);
  }
}
