import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IndividualCustomers } from '../models/individualCustomers';

@Injectable({
  providedIn: 'root'
})
export class IndividualCustomersService {
  private controllerUrl = `${environment.apiUrl}/IndividualCustomers`;

  constructor(private httpClient: HttpClient) { }


  getAllCustomers(): Observable<IndividualCustomers[]> {
    return this.httpClient.get<IndividualCustomers[]>(this.controllerUrl);
  }

  getCustomerDetail(id:number){
    return this.httpClient.get<IndividualCustomers[]>(`${this.controllerUrl}?customerId=${id}`);
  }
  createCustomer(individualCustomers: IndividualCustomers): Observable<IndividualCustomers> {
    return this.httpClient.post<IndividualCustomers>(this.controllerUrl, individualCustomers);
  }
}
