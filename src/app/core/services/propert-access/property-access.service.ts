import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyAccessService {
  public height = new BehaviorSubject<number>(405);
  public nightmode = new BehaviorSubject<boolean>(false);
  public fullscreen: boolean;
  public isloggedin = new BehaviorSubject<boolean>(null);
  public userid = '';
  constructor(private storage: LocalStorageService) {
    if (this.storage.getItem('LOGGEDIN')) {
      this.isloggedin.next(true);
    }
  }
}
