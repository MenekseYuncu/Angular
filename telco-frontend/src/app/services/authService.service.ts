import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponseModel } from '../models/loginResponseModel';
import { User } from '../models/user';
import { LocalstorageService } from './localstorageService.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private controllerUrl = `${environment.apiUrl}/auth/login`;
  constructor(
    private httpClient: HttpClient ,
    private localStorage: LocalstorageService,
    private jwtHelperService: JwtHelperService ) {}

  login(user: User): Observable<LoginResponseModel> {
    return this.httpClient.post<LoginResponseModel>(this.controllerUrl, user);
  }

  logout(){
    this.localStorage.remove('token');
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    if(this.jwtHelperService.isTokenExpired()) return false;
    return true;
  }
  
get jwtToken(){
  return this.localStorage.get('token');
}
}
