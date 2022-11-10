import { createAction, props } from "@ngrx/store";
import { IndividualCustomers } from "../models/individualCustomers";
import { corporateCustomers } from "../models/corporateCustomers";

export const setIndıvıdual = createAction('Set Indıvıdual', props<{customer: IndividualCustomers}>());
export const setCorporate = createAction('Set Corporate', props<{customer: corporateCustomers}>());
