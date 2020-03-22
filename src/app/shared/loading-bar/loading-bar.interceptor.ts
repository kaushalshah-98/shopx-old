import { LoadingBarService } from './loading-bar.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingBarInterceptor implements HttpInterceptor {
  constructor(private loadingBar: LoadingBarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.has('ignoreLoadingBar')) {
      return next.handle(req.clone({ headers: req.headers.delete('ignoreLoadingBar') }));
    }

    const r: Observable<HttpEvent<any>> = next.handle(req);

    let started = false;
    // tslint:disable-next-line: deprecation
    const responseSubscribe = r.subscribe.bind(r);
    // tslint:disable-next-line: deprecation
    r.subscribe = (...args) => {
      this.loadingBar.start();
      started = true;
      return responseSubscribe(...args);
    };

    return r.pipe(finalize(() => started && this.loadingBar.complete()));
  }
}
