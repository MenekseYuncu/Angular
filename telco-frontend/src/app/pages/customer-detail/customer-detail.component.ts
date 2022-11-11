import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { corporateCustomers } from 'src/app/models/corporateCustomers';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { subscriptions } from 'src/app/models/subscriptions';
import { CorporateCustomersServiceService } from 'src/app/services/corporate-customers-service.service';
import { IndividualCustomersService } from 'src/app/services/individual-customers-service.service';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';
import { serviceName } from 'src/app/utils/serviceList';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  customerId!: number | null;
  individualCustomers!: IndividualCustomers[];
  corporateCustomers!: corporateCustomers[];
  section!: number;
  //customerList!:[];
  customer!: {};
  services!: subscriptions[];
  serviceList!: any[];
  constructor(
    private route: ActivatedRoute,
    private corporateCustomersService: CorporateCustomersServiceService,
    private individualCustomersService: IndividualCustomersService,
    private subscriptionService: SubscriptionsService
  ) {
    this.serviceList = [{ serviceName: '', dateStarted: '' }];
  }

  ngOnInit(): void {
    this.customerId = Number(this.route.snapshot.paramMap.get('customerId'));
    this.getCustomerServices(this.customerId);
    this.getCustomerInformation(this.customerId);
  }

  getCustomerServices(customerId: number) {
    this.subscriptionService
      .getSubscription(customerId)
      .subscribe((response) => {
        this.services = response;
        this.services.forEach((item, index) => {
          this.serviceList[index] = {
            serviceName: serviceName(item.serviceId),
            dateStarted: item.dateStarted.toString(),
          };
        });
      });
  }

  getCustomerInformation(customerId: number) {
    this.corporateCustomersService
      .getCustomerDetail(customerId)
      .subscribe((res) => {
        if (res.length !== 0) {
          this.corporateCustomers = res;
          this.section = 1;
        }
      });

    this.individualCustomersService
      .getCustomerDetail(customerId)
      .subscribe((res) => {
        if (res.length !== 0) {
          this.individualCustomers = res;
          this.section = 2;
        }
      });
  }
}
