import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { corporateCustomers } from '../models/corporateCustomers';
import { IndividualCustomers } from '../models/individualCustomers';
@Injectable({
  providedIn: 'root',
})
export class CostumerServiceService {
  controllerUrl = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient) {}

  createCorporateCustomer(
    customer: corporateCustomers
  ): Observable<corporateCustomers> {
    return this.httpClient.post<corporateCustomers>(
      `${this.controllerUrl}/corporateCustomers`,
      customer
    );
  }

  createIndividualCustomer(
    customer: IndividualCustomers
  ): Observable<IndividualCustomers> {
    console.log('individual', customer);
    return this.httpClient.post<IndividualCustomers>(
      `${this.controllerUrl}/individualCustomers`,
      customer
    );
  }
}
