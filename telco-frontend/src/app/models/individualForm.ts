import { IndividualCustomers } from "./individualCustomers";
import { Service } from "./service";
export interface newIndividual extends IndividualCustomers {
    
    services: Service[];

}