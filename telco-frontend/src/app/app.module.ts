import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ListviewComponent } from './components/listview/listview.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CostumerListComponent } from './pages/costumer-list/costumer-list.component';

//declarations ---> Module ait componentleri cagirir.
//imports  ---> Modulun kullandigi modulleri tutar.
//exports ---> Bir modulden disariya acmak istedigimiz ozellikleri tutar.(fonk. degiskenler gibi)
//providers ---> injectible classlari provider icinde tanimlariz.
//baska bir comp icinde bile bir modul kullanacaginda buraya import gerekir.
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ListviewComponent,
    HomeComponent,
    LoginComponent,
    CreateFakeArrayPipe,
    SplitPipe,
    LoginComponent,
    CostumerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {positionClass: 'toast-bottom-center'},
    ),
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
