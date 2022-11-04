import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

//Bu etiket sayesinde angular once bu classi olusturur ve IoC container'ina ekler. Ardindan da istedigimiz componentte direkt const'lar icinde cagirabilmemizi saglar.
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  controllerUrl = `${environment.apiUrl}/categories`;
  //private httpClient: HttpClient; //direkt constructor param icinde tanimlayabiliriz.

  constructor(private httpClient: HttpClient) {
    //this.httpClient = httpClient;
  }

  //Observable gibi yapilarda da geri donus tipi belirtirken arguman tipi belirtmeliyiz. Bunu generic icinde belirtiriz.<>
  //Generic ile classlara ve metotlara uzerinde calisilabilecek bir tip gecebiliriz.
  getCategories(): Observable<Category[]> {
    //Get http istegini hazirlar.
    // this.httpClient
    //   .get('http://localhost:3000/categories')
    //   //subscribe istegi gonderir.
    //   .subscribe((response: Object) => {
    //     console.log(response);
    //   });

    return this.httpClient.get<Category[]>(this.controllerUrl); //Observable geri doner.
  }

  add(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.controllerUrl, category);
  }

  update(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(this.controllerUrl, category);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.controllerUrl}/${id}`);
  }
}
