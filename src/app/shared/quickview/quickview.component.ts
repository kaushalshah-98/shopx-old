import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  myThumbnail1: string;
  myThumbnail2: string;
  myThumbnail3: string;
  myThumbnail4: string;
  myThumbnail5: string;
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  productdata: any;

  constructor(
    public dialogRef: MatDialogRef<QuickviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router
  ) {
    this.productdata= data;
    console.log(this.productdata);

    this.myThumbnail1 = data.image[0].imageurl;
    this.myThumbnail2 = data.image[1].imageurl;
    this.myThumbnail3 = data.image[2].imageurl;
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  detailview(){
    this.dialogRef.close();
    this.router.navigateByUrl('/detailview', { state: this.productdata });
  }
}
