import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalstorageService} from '../../services/localstorageService.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  
  title:string = "New Customer Form";
  createIndividualCustomer!: FormGroup;
  createCorporateCustomer!: FormGroup;
 
  isChecked:boolean = true;
  constructor(private formBuilder:FormBuilder, private localStorage:LocalstorageService ,private router: Router) { }

  ngOnInit(): void {
    this.createIndividualCustomerForm();
    this.createCorporateCustomerForm();

  }

  createIndividualCustomerForm(){
    this.createIndividualCustomer = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      dateOfBirth:['',Validators.required]
    });
  }

  createCorporateCustomerForm(){
    this.createCorporateCustomer = this.formBuilder.group({
      companyName: ['', Validators.required],
      taxNumber: ['', Validators.required]
    });
  }
  CustomerOption(selected:boolean) {
    this.isChecked = selected;
  }
  

  saveIndividualCustomer(){
   // if(this.createIndividualCustomer.valid){
      this.localStorage.setItem('IndividualCustomer',JSON.stringify(this.createIndividualCustomer.value))
      this.router.navigateByUrl('/createServices')
   // }
  }
  saveCorporateCustomer(){
    //if(this.createCorporateCustomer.valid){
      this.localStorage.setItem('CorporateCustomer', JSON.stringify(this.createCorporateCustomer.value))
      this.router.navigateByUrl('/createServices')
    //}
  }




  
}
