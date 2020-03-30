import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description-viewer',
  templateUrl: './description-viewer.component.html',
  styleUrls: ['./description-viewer.component.scss']
})
export class DescriptionViewerComponent implements OnInit {

  @Input() product: any;
  constructor() { }

  ngOnInit() {
    console.log(this.product[0].specs);

  }

}
