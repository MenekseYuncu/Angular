import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
   customerId!: number | null;
   customers!: IndividualCustomers[];
   firstName!: string;
   lastName!: string;
   nationalIdentity!: number;
  constructor(private route: ActivatedRoute , private services: ServicesService) { 

  }

  ngOnInit(): void {
    this.customerId= Number(this.route.snapshot.paramMap.get("customerId"))
    console.log(this.customerId)
    this.services.getServices().subscribe((res) => {
      const cus = res.filter((customer) => {
        return customer.customerId == this.customerId;
      })
      console.log(cus)
      this.firstName= cus[0].firstName;
      this.lastName= cus[0].lastName;
      this.nationalIdentity= cus[0].nationalIdentity;
    })
 
  }
 
  // getCustomer(){
  //   const cus = this.customers.filter((customer) => {
  //     return customer.customerId == this.customerId;
  //   })
    
  // }
 
}
