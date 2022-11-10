import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;
  constructor(private authService: AuthService,private router: Router , private toastr:ToastrService) { }

  ngOnInit(): void {
    //this.isLogin = this.authService.isAuthenticated;
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
    this.toastr.success("Başarılı bir şekilde çıkış yaptınız..");
  }

}
