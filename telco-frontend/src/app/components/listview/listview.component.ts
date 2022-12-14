import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { corporateCustomers } from 'src/app/models/corporateCustomers';
import { IndividualCustomersService } from 'src/app/services/individual-customers-service.service';
import { CorporateCustomersServiceService } from 'src/app/services/corporate-customers-service.service';
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListviewComponent implements OnInit {
  language: string = 'tr';
  error: string = '';
  individualCustomers!: IndividualCustomers[];
  corporateCustomers!: corporateCustomers[];
  searchText: string = '';
  searchCorporate: string = '';
  selectedCustomer: boolean = true;

  constructor(
    private individualCustomerService: IndividualCustomersService,
    private corporateCustomerService: CorporateCustomersServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getIndividualCustomers();
    this.getCorporateCustomers();
  }
  getCorporateCustomers(): void {
    this.corporateCustomerService.getAllCustomers().subscribe((response) => {
      this.corporateCustomers = response;
    });
    this.selectedCustomer = false;
  }
  getIndividualCustomers(): void {
    this.individualCustomerService.getAllCustomers().subscribe((response) => {
      this.individualCustomers = response;
    });
    this.selectedCustomer = true;
  }

  onSearchTextChanged() {
    console.log(this.searchText);
  }
  onSearchTextCorporate() {
    console.log(this.searchCorporate);
  }

  add(): void {}

  delete() {}
}
