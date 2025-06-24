import { Component } from '@angular/core';
import { signUp } from '../data-type';
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
  ngOnInit(): void {
    this.userService.userAuthReload();
  }
  submitUser(data: signUp, form: NgForm) {
    this.userService.addUser(data);
    form.reset();
  }
}
