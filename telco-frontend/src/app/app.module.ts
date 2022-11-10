import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListviewComponent } from './components/listview/listview.component';
//import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CostumerListComponent } from './pages/costumer-list/costumer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { Token } from '@angular/compiler';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterServicePipe } from './pipes/filter-service.pipe';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterCorporatePipe } from './pipes/filter-corporate.pipe';
import { CreateServicesComponent } from './pages/create-services/create-services.component';
import { LoadingComponent } from './components/loading/loading.component';
import { StoreModule } from '@ngrx/store';
import { AppStoreState } from './store/app.state';
import { appReducer } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent,
    HomeComponent,
    LoginComponent,
    CreateFakeArrayPipe,
    SplitPipe,
    LoginComponent,
    CostumerListComponent,
    NavbarComponent,
    FilterServicePipe,
    CustomerDetailComponent,
    CreateCustomerComponent,
    FooterComponent,
    FilterCorporatePipe,
    CreateServicesComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
      },
    }),
    StoreModule.forRoot<AppStoreState>(appReducer),
  ],

  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
