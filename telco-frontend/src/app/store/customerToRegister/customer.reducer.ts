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
    return {
      ...currentState,
      individualCustomer: action.createIndividualCustomer,
    };
  }),
  on(setCreateCorporateCustomer, (currentState, action) => {
    return {
      ...currentState,
      corporateCustomer: action.createCorporateCustomer,
    };
  }),
  on(setServiceList, (currentState, action) => {
    console.log(action.serviceList);
    return {
      ...currentState,
      serviceList: action.serviceList,
    };
  })
);
