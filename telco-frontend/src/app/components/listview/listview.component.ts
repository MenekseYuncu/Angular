import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { Category } from 'src/app/models/category';
// import { CategoriesService } from 'src/app/services/categories.service';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListviewComponent implements OnInit {
  // ?:null oabilir.
  // !: null olmayacak, kullanim oncesi atama islemi yapilacak.
  //categories!: Category[]; // property henuz tanimlanmasa da kullanim oncesi atama yapilacaktir anlamina geliyor.
  language: string = 'tr';
  error: string = '';
  individualCustomers!:IndividualCustomers[];
  serviceAddForm!: FormGroup;
  searchText: string='';

  
  constructor(
   
    private serviceService: ServicesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getIndividualCustomers();
    
    
  }
  getIndividualCustomers(): void {
    this.serviceService.getServices().subscribe((response) => {
      this.individualCustomers = response;
    })
  }

  onSearchTextChanged(){
    console.log(this.searchText);
  }
  add(): void {}
   
  delete() {}
  
}
