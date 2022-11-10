import { corporateCustomers } from 'src/app/models/corporateCustomers';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { Service } from 'src/app/models/service';

export interface CustomerStoreState {
  individualCustomers: IndividualCustomers | null;
  corporateCustomers: corporateCustomers | null;
  serviceList: Service | null;
}

export const initialCustomerStoreState: CustomerStoreState = {
  individualCustomers: null,
  corporateCustomers: null,
  serviceList: null,
};
