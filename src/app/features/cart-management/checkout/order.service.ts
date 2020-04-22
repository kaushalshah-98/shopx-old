import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  userid: string;
  constructor(private apiservice: ApiService, private storage: LocalStorageService) {
    const user = this.storage.getItem('USER');
    if (user) {
      this.userid = user.userid;
    }
  }
  addOrder(order: any): Observable<any> {
    order.userid = this.userid;
    return this.apiservice.post(PATH.POST_ORDER(this.userid), order);
  }
  getUserOrder(): Observable<any> {
    return this.apiservice.get(PATH.GET_USER_ORDER_LIST(this.userid));
  }
  getAllOrders(): Observable<any> {
    return this.apiservice.get(`${PATH.POST_CART_ITEM}`);
  }
}
