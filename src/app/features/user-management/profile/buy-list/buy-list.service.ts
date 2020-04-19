import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { BuyList } from '@shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BuyListService {

  userid: string;
  constructor(private apiservice: ApiService, private storage: LocalStorageService
  ) {
    const user = this.storage.getItem('USER');
    if (user) this.userid = user.userid;
  }

  addtolist(buylist: BuyList[]): Observable<any> {
    return this.apiservice.post(PATH.POST_BUY_LIST(this.userid), buylist)
  }
  getbuylist(): Observable<any> {
    return this.apiservice.get(PATH.GET_BUY_LIST(this.userid))
  }
}
