import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IndividualCustomers } from '../models/individualCustomers';

//Bu etiket sayesinde angular once bu classi olusturur ve IoC container'ina ekler. Ardindan da istedigimiz componentte direkt const'lar icinde cagirabilmemizi saglar.
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private controllerUrl = `${environment.apiUrl}/individualCustomers`;

  constructor(private httpClient: HttpClient) {

  }
  getServices(): Observable<IndividualCustomers[]> {

    return this.httpClient.get<IndividualCustomers[]>(this.controllerUrl); //Observable geri doner.
  }

  add(individualCustomers: IndividualCustomers): Observable<IndividualCustomers> {
    return this.httpClient.post<IndividualCustomers>(this.controllerUrl, individualCustomers);
  }

  // update(service: Services): Observable<Services> {
  //   return this.httpClient.put<Services>(this.controllerUrl, service);
  // }

  // delete(id: number): Observable<void> {
  //   return this.httpClient.delete<void>(`${this.controllerUrl}/${id}`);
  // }
  }
