import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyAccessService {
  public height = new BehaviorSubject<number>(405);
  public nightmode = new BehaviorSubject<boolean>(null);
  constructor() { }
}
