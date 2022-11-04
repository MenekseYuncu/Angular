import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

//productList comp olustur
//add formu olustur.(name)
//componenti app.component'te cagir
//sayfa yuklenir yuklenmez product isimleri listelenecek
//ekleme ile urun ekledigimizde liste otomatik yenilenecek
//li ler icinde /delete buttonu olsun delete deyince silinsin
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListviewComponent implements OnInit {
  // ?:null oabilir.
  // !: null olmayacak, kullanim oncesi atama islemi yapilacak.
  categories!: Category[]; // property henuz tanimlanmasa da kullanim oncesi atama yapilacaktir anlamina geliyor.
  language: string = 'tr';
  error: string = '';

  categoryAddForm!: FormGroup;

  //categoryIdToDelete: FormControl = new FormControl('');
  categoryIdToDelete!: number;

  //categoriesService gibi const icinde yapilan tanimlamalar IoC Inversion of control container yapisi sayesinde gecerli olur.
  //bu container'in cagrildigi yerlere de dependency injection denir.
  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getCategories();
    this.createCategoryAddForm();
    //this.categoriesSevice.delete(9).subscribe();
    //this.categoriesSevice.delete(10).subscribe();
  }

  createCategoryAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      name: ['', Validators.required], //Ilk eleman baslangic degerini tutar.
      description: ['', [Validators.required, Validators.minLength(10)]], //Birden fazla validation kullanmak istersek ikinci elemani array halinda yazariz.
    });
  }
  getCategories() {
    //Object tipi henuz belli olmayan referans tipi.
    const response = this.categoriesService
      .getCategories()
      .subscribe((response) => {
        //Observer design pattern  asenk yapi icin kullanilan bir yapi
        this.categories = response;
      });

    this.categoriesService.getCategories().subscribe((response) => {
      // Observer Design Pattern
      this.categories = response;
    });
  }

  changeCategoryIdToDelete(event: any) {
    this.categoryIdToDelete = event.target.value;
  }

  add(): void {
    console.log(this.categoryAddForm.valid);
    if (this.categoryAddForm.invalid) {
      this.error = 'Form is invalid.';
      return;
    }
    if (this.error) this.error = '';
    console.log(this.categoryAddForm);
    const category: Category = { ...this.categoryAddForm.value };
    this.categoriesService.add(category).subscribe({
      next: (response) => {
        console.info(`Category(${response.id} has added.)`);
      },
      error: (err) => {
        console.log(err);
        this.error = err.statusText;
      },
      complete: () => {
        if (this.error) this.error = '';
        console.info('Category has added.');
        this.categoryAddForm.reset();
        this.getCategories();
      },
    });
  }

  delete() {
    this.categoriesService.delete(this.categoryIdToDelete).subscribe(() => {
      this.categoryIdToDelete = 0;
      this.getCategories();
    });
  }
}
