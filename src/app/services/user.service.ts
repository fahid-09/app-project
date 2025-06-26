import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, signUp } from '../data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  addUser(userData: signUp) {
    return this.http.post("http://localhost:3000/user", userData, { observe: 'response' }).subscribe((result) => {
      if (result) {
        localStorage.setItem('user', JSON.stringify(result.body));
        this.router.navigate(['/'])
      }
    })
  }

  logInUser(userData: login) {
     this.http.get<signUp[]>(`http://localhost:3000/user?email=${userData.email}&password=${userData.password}`,
      { observe: 'response' }).subscribe((result) => {
        if(result && result.body && result.body.length >0){
          console.log(result );
          localStorage.setItem('user', JSON.stringify(result.body[0]));
        this.router.navigate(['/'])
        }
      })
  }
  userAuthReload() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/'])
    }
  }
}