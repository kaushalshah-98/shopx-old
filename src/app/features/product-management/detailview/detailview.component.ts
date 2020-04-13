import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
  state$: any;
  productdata: any;

  constructor(private activateRouter: ActivatedRoute, private property: PropertyAccessService) {}

  ngOnInit() {
    this.state$ = this.activateRouter.paramMap
      .pipe(map(() => window.history.state))
      .subscribe((res) => (this.productdata = res));
  }
}
