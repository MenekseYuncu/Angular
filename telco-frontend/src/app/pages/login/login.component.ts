import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authService.service';
import { LocalstorageService } from 'src/app/services/localstorageService.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localstorageService: LocalstorageService,
    private router: Router,
    //private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }
  login() {
    console.log('test')
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.localstorageService.setItem('token', response['access_token']);
        this.loginForm.reset();
        //this.toastrService.info(response.message)
        window.alert('işlem başarılı')
        console.log('tost message')
      },
      error: (err)=>{

        console.log('tost message')
        //this.toastrService.error(err)}
      }
  });
    this.router.navigateByUrl('customerList');
  }

  
}
