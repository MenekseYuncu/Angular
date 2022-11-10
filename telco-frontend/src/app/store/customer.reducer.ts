import { createReducer, on } from "@ngrx/store";
import { corporateCustomers } from "../models/corporateCustomers";
import { IndividualCustomers } from "../models/individualCustomers";
import { Service } from "../models/service";
import { setIndıvıdual } from "./customer.actions";


export interface CustomerState{
    individualCustomer: IndividualCustomers | null;
    corporate: corporateCustomers | null;
    services: Service[];
}

export const initialState: CustomerState ={
    individualCustomer: null,
    corporate: null,
    services: []
}
export const customerReducer = createReducer(
    initialState,
    on(setIndıvıdual,(state, {customer})=>{
        return { 
            ...state,
            individualCustomer: customer
            
        }
    })
)
