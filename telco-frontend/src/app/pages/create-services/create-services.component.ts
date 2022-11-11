import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';
import { AppStoreState } from 'src/app/store/app.state';
import { setServiceList } from 'src/app/store/customerToRegister/customer.action';

@Component({
  selector: 'app-create-services',
  templateUrl: './create-services.component.html',
  styleUrls: ['./create-services.component.css'],
})
export class CreateServicesComponent implements OnInit {
  services!: Service[];
  createServices!: FormGroup;
  serviceList$: Observable<string[] | null>;
  constructor(
    private formBuilder: FormBuilder,
    private servicesService: ServicesService,
    private router: Router,
    private store: Store<AppStoreState>
  ) {
    this.serviceList$ = this.store.select(
      (state) => state.customer.serviceList
    );
  }

  ngOnInit(): void {
    this.getServices();
    this.createServicesForm();
  }

  createServicesForm() {
    this.createServices = this.formBuilder.group({
      serviceList: new FormArray([]),
    });
  }

  getServices() {
    this.servicesService.getServices().subscribe((response) => {
      this.services = response;
    });
  }
  goBack() {
    this.router.navigateByUrl('/createCustomer');
  }

  onCheckChange(eventValue: any) {
    const serviceList: FormArray = this.createServices.get(
      'serviceList'
    ) as FormArray;

    if (eventValue.target.checked) {
      serviceList.push(new FormControl(eventValue.target.value));
    }
  }

  saveServices() {
    this.store.dispatch(setServiceList(this.createServices.value));
    this.store.select((state) => {
      console.log(state);
    });
    //this.router.navigateByUrl('');
  }
}
