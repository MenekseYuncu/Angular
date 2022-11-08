import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { IndividualCustomersService } from 'src/app/services/individual-customers-service.service';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
   customerId!: number | null;
   customers!: IndividualCustomers[];
   firstName!: string | undefined;
   lastName!: string | undefined;
   nationalIdentity!: number | undefined;
   dateOfBirth!: Date | undefined;
  constructor(private route: ActivatedRoute , private individualCustomersService: IndividualCustomersService) { 

  }

  ngOnInit(): void {
    this.customerId= Number(this.route.snapshot.paramMap.get("customerId"))
    console.log(this.customerId)
    this.individualCustomersService.getAllCustomers().subscribe((res) => {
      const cus = res.find((customer) => {
        return customer.customerId == this.customerId;
      })
      console.log(cus)
      this.firstName= cus?.firstName;
      this.lastName= cus?.lastName;
      this.nationalIdentity= cus?.nationalIdentity;
      this.dateOfBirth= cus?.dateOfBirth;
    })
 
  }

 
}
