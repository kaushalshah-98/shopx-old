import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import defaultLanguage from '../assets/i18n/en.json';
import { TranslateService } from '@ngx-translate/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SHOPX';
  isShow: boolean;
  topPosToStartShowing = 20;
  constructor(private translate: TranslateService, private property: PropertyAccessService) {
    translate.setTranslation('en', defaultLanguage);
    translate.setDefaultLang('en');
  }
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
