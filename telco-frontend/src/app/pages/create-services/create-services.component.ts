import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-create-services',
  templateUrl: './create-services.component.html',
  styleUrls: ['./create-services.component.css']
})
export class CreateServicesComponent implements OnInit {
  services!: Service[];
  createServices!: FormGroup;
  
  constructor(private formBuilder:FormBuilder,  private servicesService: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.getServices();
  }

  createServicesForm(){
    this.createServices = this.formBuilder.group({
    selectedServices: new FormArray([])
    });
  }

  getServices(){
    this.servicesService.getServices().subscribe((response) => 
    {this.services = response})
}
goBack(){
  this.router.navigateByUrl('/createCustomer');
}

}
