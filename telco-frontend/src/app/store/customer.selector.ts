import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState } from "./customer.reducer";

export const IndividualCustomerSelector = createSelector(
    createFeatureSelector('customer'),
    (state: CustomerState)=> {
        return state.individualCustomer
    }
)

