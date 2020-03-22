import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Inject
} from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { Router } from "@angular/router";
import { UserManagementService } from "@services/user-service/user-management.service";
import { DOCUMENT } from "@angular/common";
import { ConfirmDialogService } from "@shared/confirm-dialog/confirm-dialog.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  @Input() siteLeftPanel: MatSidenav;
  @Input() isHidden: boolean = false;
  @Input() isAdmin: boolean = false;
  username: string;
  elem;
  value;
  isFullscreen: boolean;
  currentLanguage: string;
  constructor(
    private router: Router,
    private userservice: UserManagementService,
    private dialog: ConfirmDialogService,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: any
  ) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang("en");

    const browserlang = translate.getBrowserLang();
    this.currentLanguage = browserlang;
    translate.use(browserlang.match(/en|fr/) ? browserlang : "en");
  }
  userdetails;
  login_status: string;
  ngOnInit() {
    this.elem = document.documentElement;
    this.userdetails = this.userservice.getUserData();
  }
  goToCart() {
    this.router.navigate(["cart"]);
  }
  getUserName() {
    if (this.isAdmin) {
      return "ADMIN";
    } else {
      if (this.userdetails === null) return "Sign In";
      this.username = this.userdetails.name;
      return this.username;
    }
  }
  onLanguageSelect({ value: language }) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  getLoginStatus() {
    if (this.isAdmin) {
      return "Logout";
    } else {
      if (this.userdetails === null) return "Login";
      return "Logout";
    }
  }
  logout() {
    if (this.getLoginStatus() === "Login") {
      this.router.navigate(["login"]);
    } else {
      this.dialog
        .showConfirmDialog("Are You Sure Want to Logout ?")
        .subscribe(result => {
          if (result === "yes") {
            localStorage.clear();
            this.router.navigate(["login"]);
          }
        });
    }
  }
  getText() {
    return this.isFullscreen ? "fullscreen_exit" : "fullscreen";
  }
  configureFullscreen() {
    this.isFullscreen = !this.isFullscreen;
    if (!this.isFullscreen) {
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
  changetheme(value) {}
}
