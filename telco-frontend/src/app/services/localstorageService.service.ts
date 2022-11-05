import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  [x: string]: any;
  constructor() {}

  get(key: string){
    localStorage.getItem(key)
  }
  setItem(key: string, item: any) {
    localStorage.setItem(`${key}`, item);
  }
  remove(key: string){
    localStorage.removeItem(key);
  }
}
