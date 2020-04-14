import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  productid: string;
  isDisabled = true;
  heightt: number;
  themestatus: boolean;
  constructor(private property: PropertyAccessService) {}
  ngOnInit() {}
  onProductDelete() {
    console.log(this.productid);
  }
  onInputChanged(input: string) {
    if (input === null || input === '') {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
    this.productid = input;
  }
}
