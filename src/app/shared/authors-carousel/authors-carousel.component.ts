import { Component, OnInit } from '@angular/core';
import { Author } from '@shared/interfaces';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-authors-carousel',
  templateUrl: './authors-carousel.component.html',
  styleUrls: ['./authors-carousel.component.scss']
})
export class AuthorsCarouselComponent implements OnInit {
  constructor(private property: PropertyAccessService) {}
  authors: Author[];
  ngOnInit() {
    this.authors = [
      {
        name: 'Manthan',
        image: '../../../assets/images/icon-login-profile.svg',
        description: 'shared.authors.manthan_description',
        profession: 'shared.authors.manthan_profession'
      },
      {
        name: 'Vishal',
        image: '../../../assets/images/icon-login-profile.svg',
        description: 'shared.authors.vishal_description',
        profession: 'shared.authors.vishal_profession'
      },
      {
        name: 'Ramkrishna',
        image: '../../../assets/images/icon-login-profile.svg',
        description: 'shared.authors.ramkrishna_description',
        profession: 'shared.authors.ramkrishna_profession'
      }
    ];
  }
}
