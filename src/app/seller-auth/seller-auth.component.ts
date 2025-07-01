import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';
import {  faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private sellerservice: SellerService, private router: Router) { }
  showLogin = false;
  authError = "";
  icon = faEye;
  hiddenEye = faEyeSlash;
  hidePassword: boolean = false;

  ngOnInit(): void {
    this.sellerservice.sellerReload();
  }
  signUp(data: signUp): void {
    // console.log(data)
    this.sellerservice.userSignUp(data)
    // .subscribe((result) => {
    //   if (result) {
    //     this.router.navigate(['/seller-home'])
    //   }
    // })
  }
  
  openLoginSignupForm() {
    this.showLogin = !this.showLogin;
  }
  login(data: login) {
    // console.log("login data", data)
    this.sellerservice.userLogin(data);
    this.sellerservice.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "email or password is incorrect"
      }
    })
  }
  hideShowPassword(){
    this.hidePassword = !this.hidePassword;
  }
}
