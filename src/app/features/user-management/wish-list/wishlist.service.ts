import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  userid: string;
  constructor(private apiservice: ApiService, private storage: LocalStorageService) {
    const user = this.storage.getItem('USER');
    if (user) {
      this.userid = user.userid;
    }
  }

  addtoWishlist(product: any): Observable<any> {
    product.userid = this.userid;
    return this.apiservice.post(`${PATH.POST_WISH_ITEM}`, product);
  }
  getWishlistItems(): Observable<any> {
    return this.apiservice.get(PATH.GET_WISH_LIST(this.userid));
  }
  updateWishlist(product: any): Observable<any> {
    return this.apiservice.put(PATH.PUT_WISH_ITEM(this.userid), product);
  }
  clearWishlist(): Observable<any> {
    return this.apiservice.delete(PATH.DELETE_WISH_LIST(this.userid));
  }
}
