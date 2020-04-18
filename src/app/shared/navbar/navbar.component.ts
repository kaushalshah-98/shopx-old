import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { UserManagementService } from 'src/app/features/user-management/user-service/user-management.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  @Input() siteLeftPanel: MatSidenav;
  @Input() isHidden = false;
  @Input() isAdmin = false;
  @Output() IsNightmode = new EventEmitter<boolean>();
  @Output() IsFullscreen = new EventEmitter<boolean>();

  username: string;
  elem;
  value: boolean;
  currentLanguage: string;
  optionmenu: any;
  constructor(
    private router: Router,
    private userservice: UserManagementService,
    private dialog: ConfirmDialogService,
    private translate: TranslateService,
    private notification: NotificationService,
    @Inject(DOCUMENT) private document: any,
    private property: PropertyAccessService
  ) {
    translate.addLangs(['en', 'fr', 'de', 'sk', 'hi', 'es', 'he']);
    translate.setDefaultLang('en');

    const browserlang = translate.getBrowserLang();
    this.currentLanguage = browserlang;
    translate.use(browserlang.match(/en|fr/) ? browserlang : 'en');
  }
  userdetails;
  login_status: string;
  ngOnInit() {
    this.elem = document.documentElement;
    this.userdetails = this.userservice.getUserData();
    this.getmenu();
  }
  getmenu() {
    if (!this.isAdmin) {
      this.optionmenu = [
        { name: 'nav_bar.menu.your_account', icon: 'account_circle', url: '/usersettings/profile' },
        { name: 'nav_bar.menu.your_order', icon: 'assignment', url: '/usersettings/my_orders' },
        { name: 'nav_bar.menu.your_wishlist', icon: 'favorite', url: '/usersettings/wishlist' }
      ];
    } else {
      this.optionmenu = [
        { name: 'nav_bar.menu.your_account', icon: 'account_circle', url: '/usersettings/profile' }
      ];
    }
  }
  route(url) {
    this.router.navigateByUrl(url);
  }
  goToCart() {
    this.router.navigate(['cart']);
  }
  getUserName() {
    if (this.isAdmin) {
      return 'ADMIN';
    } else {
      if (this.userdetails === null) {
        return 'Sign In';
      }
      this.username = this.userdetails.name;
      return this.username;
    }
  }
  onLanguageSelect(language) {
    this.translate.use(language);
    this.currentLanguage = language;
    this.notification.info(`Selected Language is ${language}`);
  }
  getLoginStatus() {
    if (this.isAdmin) {
      return 'nav_bar.menu.logout';
    } else {
      if (this.userdetails === null) {
        return 'nav_bar.menu.login';
      }
      return 'nav_bar.menu.logout';
    }
  }
  logout() {
    if (this.getLoginStatus() === 'nav_bar.menu.login') {
      this.router.navigate(['login']);
    } else {
      this.dialog.showConfirmDialog('confirm.are_you_sure_want_to_logout').subscribe((result) => {
        if (result === 'yes') {
          localStorage.clear();
          this.router.navigate(['login']);
        }
      });
    }
  }
  getText() {
    return this.property.fullscreen ? 'fullscreen_exit' : 'fullscreen';
  }
  configureFullscreen() {
    this.property.fullscreen = !this.property.fullscreen;
    if (!this.property.fullscreen) {
      this.IsFullscreen.emit(false);
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        this.document.msExitFullscreen();
      }
    } else {
      this.IsFullscreen.emit(true);
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        this.elem.msRequestFullscreen();
      }
    }
  }
  onThemeChange(status) {
    this.property.nightmode.next(status);
    this.IsNightmode.emit(status);
  }
  // changetheme(status) {
  //   this.property.nightmode.next(status);
  //   this.IsNightmode.emit(status);
  // }
  contact() {
    this.router.navigateByUrl('/contactus/$');
  }
}
