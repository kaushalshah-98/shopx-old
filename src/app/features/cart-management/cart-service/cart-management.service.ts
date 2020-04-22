import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartManagementService {
  userid: string;
  constructor(private apiservice: ApiService, private storage: LocalStorageService) {
    const user = this.storage.getItem('USER');
    if (user) {
      this.userid = user.userid;
    }
  }

  addtoCart(product: any): Promise<any> {
    product.userid = this.userid;
    return this.apiservice.post(`${PATH.POST_CART_ITEM}`, product).toPromise();
  }
  getCartItems(): Promise<any> {
    return this.apiservice.get(PATH.GET_CART_ITEMS(this.userid)).toPromise();
  }
  getCartSize(): Promise<any> {
    return this.apiservice.get(PATH.GET_CARTSIZE(this.userid)).toPromise();;
  }
  updateCart(product: any): Observable<any> {
    return this.apiservice.put(PATH.PUT_UPDATE_CART__ITEM(this.userid), product);
  }
  removefromCart(product: any): Promise<any> {
    return this.apiservice.put(PATH.PUT_DELETE_CART_ITEM(this.userid), product).toPromise();
  }
  clearCart(): Promise<any> {
    return this.apiservice.delete(PATH.DELETE_CART(this.userid)).toPromise();
  }
}
