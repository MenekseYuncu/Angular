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
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { Token } from '@angular/compiler';
import { NavbarComponent } from './pages/navbar/navbar.component';

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
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {positionClass: 'toast-bottom-center'},
    ),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }}
    })
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
