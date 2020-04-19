import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  userid: string;
  constructor(private apiservice: ApiService, private storage: LocalStorageService) {
    const user = this.storage.getItem('USER');
    if (user) { this.userid = user.userid; }
  }
  changeTheme(night_theme: any): Observable<any> {
    return this.apiservice.put(PATH.PUT_THEME(this.userid), night_theme);
  }
  getTheme(): Observable<any> {
    return this.apiservice.get(PATH.GET_THEME(this.userid));
  }
}
