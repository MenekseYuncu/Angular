import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CostumerListComponent} from './pages/costumer-list/costumer-list.component';
import { LoginGuard} from './guard/login.guard'
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { CreateServicesComponent } from './pages/create-services/create-services.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent ,canActivate: [LoginGuard]},
  { path: 'customerList', component: CostumerListComponent, canActivate: [LoginGuard]},
  { path: 'customerDetails/:customerId', component: CustomerDetailComponent, canActivate: [LoginGuard]},
  { path: 'createCustomer', component: CreateCustomerComponent, canActivate: [LoginGuard]},
  { path: 'createServices', component: CreateServicesComponent, canActivate: [LoginGuard]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
