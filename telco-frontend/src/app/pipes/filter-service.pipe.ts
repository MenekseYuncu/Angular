import { Pipe, PipeTransform } from '@angular/core';
import { IndividualCustomers } from '../models/individualCustomers';

@Pipe({
  name: 'filterService'
})
export class FilterServicePipe implements PipeTransform {

  transform(value: IndividualCustomers[], firstName: string): IndividualCustomers[] {
    return value.filter((individualCustomers) =>
    individualCustomers.firstName.toLocaleLowerCase().includes(firstName.toLocaleLowerCase())
    );
  }
 
}
