import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-quickview",
  templateUrl: "./quickview.component.html",
  styleUrls: ["./quickview.component.scss"]
})
export class QuickviewComponent implements OnInit {
  myThumbnail1: string;
  myThumbnail2: string;
  myThumbnail3: string;
  myThumbnail4: string;
  myThumbnail5: string;
  constructor(
    public dialogRef: MatDialogRef<QuickviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.myThumbnail1 = data.image;
    this.myThumbnail2 = data.image1;
    this.myThumbnail3 = data.image2;
    this.myThumbnail4 = data.image3;
    this.myThumbnail5 = data.image4;
  }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
