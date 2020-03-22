import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-category-card",
  templateUrl: "./category-card.component.html",
  styleUrls: ["./category-card.component.scss"]
})
export class CategoryCardComponent implements OnInit {
  @Input() items_category1;
  @Input() items_category2;
  constructor() {}

  ngOnInit() {}
}
