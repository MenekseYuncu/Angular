import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  setItem(key: string, item: any) {
    localStorage.setItem(`${key}`, item);
  }
}
