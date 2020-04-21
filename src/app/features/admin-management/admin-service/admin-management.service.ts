import { Injectable } from '@angular/core';
import { ApiService, PATH } from '@core/api/api.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminManagementService {
  constructor(private apiservice: ApiService) {}
  blockuser(status: any, userid: string): Observable<any> {
    return this.apiservice.put(PATH.PUT_BLOCK_USER(userid), status);
  }
  getusers(): Observable<any> {
    return this.apiservice.get(`${PATH.GET_USER_LIST}`);
  }
}
