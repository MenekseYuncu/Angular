import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from '../models/service';

//Bu etiket sayesinde angular once bu classi olusturur ve IoC container'ina ekler. Ardindan da istedigimiz componentte direkt const'lar icinde cagirabilmemizi saglar.
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private controllerUrl = `${environment.apiUrl}/services`;

  constructor(private httpClient: HttpClient) {

  }
  getServices(): Observable<Service[]> {

    return this.httpClient.get<Service[]>(this.controllerUrl); //Observable geri doner.
  }

  add(service: Service): Observable<Service> {
    return this.httpClient.post<Service>(this.controllerUrl, service);
  }

  // update(service: Services): Observable<Services> {
  //   return this.httpClient.put<Services>(this.controllerUrl, service);
  // }

  // delete(id: number): Observable<void> {
  //   return this.httpClient.delete<void>(`${this.controllerUrl}/${id}`);
  // }
  }
