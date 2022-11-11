import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { corporateCustomers } from 'src/app/models/corporateCustomers';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { LocalstorageService } from 'src/app/services/localstorageService.service';
import { AppStoreState } from 'src/app/store/app.state';
import { setCreateIndividualCustomer } from 'src/app/store/customerToRegister/customer.action';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css'],
})
export class CustomerOverviewComponent implements OnInit {
  individualCustomer!: IndividualCustomers;
  corporateCustomer!: corporateCustomers;
  serviceList!: [];
  services!: [{ serviceName: ''; dateStarted: string }];
  section!: number;
  constructor(
    private store: Store<AppStoreState>,
    private localStorage: LocalstorageService,
    private router: Router
  ) {
    this.services = [{ serviceName: '', dateStarted: '' }];
  }

  ngOnInit() {
    this.getCustomerState();
  }

  getCurrentDate() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}.${month}.${year}`;
    return currentDate;
  }
  getCustomerState() {
    if (this.localStorage.get('individual_customer') !== undefined) {
      this.individualCustomer = JSON.parse(
        this.localStorage.get('individual_customer')!
      );
      this.section = 1;
    } else if (this.localStorage.get('corporate_customer') !== undefined) {
      this.corporateCustomer = JSON.parse(
        this.localStorage.get('corporate_customer')!
      );
      this.section = 2;
    }
    if (this.localStorage.get('service_list') !== undefined) {
      this.serviceList = JSON.parse(this.localStorage.get('service_list')!)[
        'serviceList'
      ];
      this.serviceList.forEach((item, index) => {
        this.services[index] = {
          serviceName: item,
          dateStarted: this.getCurrentDate(),
        };
      });
    }
    // this.store.select((state) => {
    //   console.log(state.customer.individualCustomer);
    // });
  }

  saveCustomer() {
    this.localStorage.remove('individual_customer');
    this.localStorage.remove('corporate_customer');
    this.localStorage.remove('service_list');
    this.router.navigateByUrl('/customerList');
  }
}
