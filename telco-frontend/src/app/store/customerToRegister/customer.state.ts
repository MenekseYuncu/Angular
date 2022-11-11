import { corporateCustomers } from 'src/app/models/corporateCustomers';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { Service } from 'src/app/models/service';

export interface CustomerStoreState {
  individualCustomer: IndividualCustomers | null;
  corporateCustomer: corporateCustomers | null;
  serviceList: string[] | null;
}

export const initialCustomerStoreState: CustomerStoreState = {
  individualCustomer: null,
  corporateCustomer: null,
  serviceList: null,
};
