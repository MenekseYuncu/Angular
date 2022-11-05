import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorageService.service';
import { AuthService } from '../services/authService.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private localStorage: LocalstorageService,
    private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //let token = this.localStorage['getItem']('token');
    if (this.authService.isAuthenticated()){
      let newRequest = request.clone({
        setHeaders: {Authorization: `Bearer ${this.authService.jwtToken}`}
      })
    }
    return next.handle(request);
  }
}
