import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  // Subject, baslangicta initial degeri calismaz, ilk degisim anindan itibaren her calisma aninda dinlemeye baslar
  isLoadingSubject: Subject<boolean> = new Subject<boolean>();
  pendingRequestCount: number = 0;
  constructor() {}

  startLoading() {
    this.pendingRequestCount++;
    this.isLoadingSubject.next(this.pendingRequestCount > 0);
  }
  stopLoading() {
    this.pendingRequestCount--;
    this.isLoadingSubject.next(this.pendingRequestCount > 0);
  }
}
