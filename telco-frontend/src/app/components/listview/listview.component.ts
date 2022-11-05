import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { Category } from 'src/app/models/category';
// import { CategoriesService } from 'src/app/services/categories.service';
import { Service } from 'src/app/models/service';
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
  service!:Service[];
  serviceAddForm!: FormGroup;


  
  constructor(
   
    private serviceService: ServicesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getServices();
    
    
  }

  // createServiceAddForm(){
  //   this.serviceAddForm = this.formBuilder.group({
  //     name: ['', Validators.required]
  //   })
  // }

  getServices(): void {
    this.serviceService.getServices().subscribe((response) => {
      this.service = response;
    })
  }
  add(): void {}
   
  delete() {}
  
}
