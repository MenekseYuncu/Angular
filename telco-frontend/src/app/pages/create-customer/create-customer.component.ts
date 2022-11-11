import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStoreState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { corporateCustomers } from 'src/app/models/corporateCustomers';
import {
  setCreateCorporateCustomer,
  setCreateIndividualCustomer,
} from 'src/app/store/customerToRegister/customer.action';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  title: string = 'New Customer Form';
  createIndividualCustomer!: FormGroup;
  createCorporateCustomer!: FormGroup;
  individualCustomer$: Observable<IndividualCustomers | null>;
  corporateCustomer$: Observable<corporateCustomers | null>;

  isChecked: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private store: Store<AppStoreState>
  ) {
    this.individualCustomer$ = this.store.select(
      (state) => state.customer.individualCustomer
    );
    this.corporateCustomer$ = this.store.select(
      (state) => state.customer.corporateCustomer
    );
  }

  ngOnInit(): void {
    this.createIndividualCustomerForm();
    this.createCorporateCustomerForm();
  }

  createIndividualCustomerForm() {
    this.createIndividualCustomer = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });
  }

  createCorporateCustomerForm() {
    this.createCorporateCustomer = this.formBuilder.group({
      companyName: ['', Validators.required],
      taxNumber: ['', Validators.required],
    });
  }
  CustomerOption(selected: boolean) {
    this.isChecked = selected;
  }

  saveIndividualCustomer() {
    if (this.createIndividualCustomer.valid) {
      this.store.dispatch(
        setCreateIndividualCustomer(this.createIndividualCustomer.value)
      );
      this.store.select((state) =>
        console.log(state.customer.individualCustomer)
      );
      this.router.navigateByUrl('/createServices');
    } else {
      this.toastr.error('Butun alanlari doldurunuz.');
    }
  }
  saveCorporateCustomer() {
    if (this.createCorporateCustomer.valid) {
      this.store.dispatch(
        setCreateCorporateCustomer(this.createCorporateCustomer.value)
      );
      this.store.select((state) =>
        console.log(state.customer.corporateCustomer)
      );
      this.router.navigateByUrl('/createServices');
    } else {
      this.toastr.error('Butun alanlari doldurunuz.');
    }
  }
}
