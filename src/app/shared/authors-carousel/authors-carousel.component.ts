import { Component, OnInit } from '@angular/core';
import { Author } from '@shared/interfaces';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-authors-carousel',
  templateUrl: './authors-carousel.component.html',
  styleUrls: ['./authors-carousel.component.scss']
})
export class AuthorsCarouselComponent implements OnInit {
  constructor(private property: PropertyAccessService) { }
  authors: Author[];
  ngOnInit() {
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
}
