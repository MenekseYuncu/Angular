import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

//Angularda her comp bir class ve her comp basinda @Component({}) ile belirtilmelidir.
//selector degiskeni, componenti diger componentler icinde cagirmamizi saglayan degiskendir.
//templateUrl componentin bagli olan html dosyasini tutar.
//styleUrls stil dosyalarini tutan degiskendir.
// template: 'html kodlari' diyerek componentin bagli oldugu html'i direkt component icine yazabiliriz.

//ng generate component componentDizini/componentAdi diyerek component olusturabiliriz.
//Bu komut component dosyalarini olusturup ardindan app.module.ts icinde imports kismina ekler
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'telco-frontend12';
  isLoading: boolean = false;
  today: Date = new Date();

  constructor(private loadingService: LoadingService) {}
  ngOnInit(): void {
    this.subscribeToLoading();
  }

  sumOfNumbers(a: number, b: number) {
    let result = a + b;
    // console.log(result);
    return result;
  }

  btnClick() {
    alert('Butona tıklandı');
  }

  subscribeToLoading() {
    this.loadingService.isLoadingSubject.subscribe((isLoading) => {
      this.isLoading = isLoading;
      console.log(`Is Loading değeri: ${isLoading}`);
    });
  }

  startLoading() {
    this.loadingService.startLoading();
  }
  stopLoading() {
    this.loadingService.stopLoading();
  }
}
