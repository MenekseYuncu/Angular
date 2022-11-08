import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { corporateCustomers } from '../models/corporateCustomers';

@Injectable({
  providedIn: 'root'
})
export class CorporateCustomersServiceService {
  private controllerUrl = `${environment.apiUrl}/corporateCustomers`;

  constructor(private httpClient: HttpClient) { }

  createCustomer(CorporateCustomer: corporateCustomers): Observable<corporateCustomers> {
    return this.httpClient.post<corporateCustomers>(this.controllerUrl, CorporateCustomer);
  }

  getAllCustomers(): Observable<corporateCustomers[]> {
    return this.httpClient.get<corporateCustomers[]>(this.controllerUrl);
  }

  getCustomerDetail(id:number){
    return this.httpClient.get<corporateCustomers[]>(`${this.controllerUrl}?customerId=${id}`);
  }
}
