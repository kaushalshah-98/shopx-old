import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingBarComponent } from "./loading-bar.component";
import { LoadingBarRouterModule } from "./loading-router.module";
import { LoadingBarService } from "./loading-bar.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoadingBarInterceptor } from "./loading-bar.interceptor";

@NgModule({
  imports: [CommonModule, LoadingBarRouterModule],
  declarations: [LoadingBarComponent],
  providers: [
    LoadingBarService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingBarInterceptor, multi: true }
  ],
  exports: [LoadingBarComponent]
})
export class LoadingBarModule {}
