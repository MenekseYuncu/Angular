import { createAction, props } from '@ngrx/store';
import { corporateCustomers } from 'src/app/models/corporateCustomers';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { Service } from 'src/app/models/service';

export const setCreateIndividualCustomer = createAction(
  '[Customer] Set Create Individual Customer',
  props<{ createIndividualCustomer: IndividualCustomers }>()
);

export const setCreateCorporateCustomer = createAction(
  '[Customer] Set Create Corporate Customer',
  props<{ createCorporateCustomer: corporateCustomers }>()
);

export const setServiceList = createAction(
  '[Customer] Set Services Customer',
  props<{ serviceList: string[] }>()
);
