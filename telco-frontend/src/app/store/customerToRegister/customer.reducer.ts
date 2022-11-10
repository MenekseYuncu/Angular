import {
  CustomerStoreState,
  initialCustomerStoreState,
} from './customer.state';
import { createReducer, on } from '@ngrx/store';
import {
  setCreateCorporateCustomer,
  setCreateIndividualCustomer,
  setServiceList,
} from './customer.action';

export const customerReducer = createReducer<CustomerStoreState>(
  initialCustomerStoreState,
  on(setCreateIndividualCustomer, (currentState, action) => {
    console.log(action);
    return {
      ...currentState,
      individualCustomers: action.createIndividualCustomer,
    };
  }),
  on(setCreateCorporateCustomer, (currentState, action) => {
    return {
      ...currentState,
      corporateCustomers: action.createCorporateCustomer,
    };
  }),
  on(setServiceList, (currentState, action) => {
    return {
      ...currentState,
      serviceList: action.selectedServices,
    };
  })
);
