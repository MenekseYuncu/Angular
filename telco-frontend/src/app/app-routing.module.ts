import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CostumerListComponent} from './pages/costumer-list/costumer-list.component';
import { LoginGuard} from './guard/login.guard'
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customerList', component: CostumerListComponent, canActivate: [LoginGuard]},
  { path: 'customerDetails/:customerId', component: CustomerDetailComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
