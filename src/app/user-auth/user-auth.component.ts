import { Component } from '@angular/core';
import { login, signUp } from '../data-type';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  constructor(private userService: UserService) {
  }

  userLogedIn: boolean = false;
  ngOnInit(): void {
    this.userService.userAuthReload();
  }
  signupUser(signupData: signUp, form: NgForm) {
    this.userService.addUser(signupData);
    form.reset();
  }
  submitUserLogin(loginData: login) {
    this.userService.logInUser(loginData)
  }

  openLoginSignupForm() {
    this.userLogedIn = !this.userLogedIn;
  }
}
