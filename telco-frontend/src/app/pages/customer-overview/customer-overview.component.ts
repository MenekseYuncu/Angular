import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { corporateCustomers } from 'src/app/models/corporateCustomers';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { AppStoreState } from 'src/app/store/app.state';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css'],
})
export class CustomerOverviewComponent implements OnInit {
  individualCustomer!: IndividualCustomers;
  corporateCustomer!: corporateCustomers;
  section!: number;
  constructor(private store: Store<AppStoreState>) {}

  ngOnInit() {
    this.getCustomerState();
  }

  getCustomerState() {
    console.log('t');
    this.store.select((state) => {
      console.log(state.customer.individualCustomer);
    });
  }
}
