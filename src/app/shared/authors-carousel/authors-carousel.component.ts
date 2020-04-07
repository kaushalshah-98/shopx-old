import { Component, OnInit } from '@angular/core';
import { Author } from '@shared/interfaces';

@Component({
  selector: 'app-authors-carousel',
  templateUrl: './authors-carousel.component.html',
  styleUrls: ['./authors-carousel.component.scss']
})
export class AuthorsCarouselComponent implements OnInit {
  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];
  fruitss = [];
  constructor() { }
  authors: Author[];
  ngOnInit() {
    this.fruitss = this.fruits
    this.authors = [
      {
        name: 'Manthan',
        image: '../../../assets/images/icon-login-profile.svg',
        description:
          'The responsibilities of an Author include writing original stories for novels, plays, television scripts, and movies. Authors also write journals, develop story elements, and rewrite and revise pieces written by other writers',
        profession: 'Web developer'
      },
      {
        name: 'Vishal',
        image: '../../../assets/images/icon-login-profile.svg',
        description:
          'The responsibilities of an Author include writing original stories for novels, plays, television scripts, and movies. Authors also write journals, develop story elements, and rewrite and revise pieces written by other writers',
        profession: 'Web developer'
      },
      {
        name: 'Ramkrishna',
        image: '../../../assets/images/icon-login-profile.svg',
        description:
          'The responsibilities of an Author include writing original stories for novels, plays, television scripts, and movies. Authors also write journals, develop story elements, and rewrite and revise pieces written by other writers',
        profession: 'Web developer'
      }
    ];
  }
  remove(fruit): void {
    this.fruitss = this.fruits.filter(fru => !(fru.name === fruit.name))
  }
}
