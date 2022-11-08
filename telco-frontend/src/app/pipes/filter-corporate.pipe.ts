import { Pipe, PipeTransform } from '@angular/core';
import { corporateCustomers } from '../models/corporateCustomers';

@Pipe({
  name: 'filterCorporate'
})
export class FilterCorporatePipe implements PipeTransform {

  transform(value: corporateCustomers[], companyName: string): corporateCustomers[] {
    return value.filter((corporateCustomers) =>
    corporateCustomers.companyName.toLocaleLowerCase().includes(companyName.toLocaleLowerCase())
    );
  }

}
