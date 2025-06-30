import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product, login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLogedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }
  
  userSignUp(data: signUp) {
    this.http.post("http://localhost:3000/seller", data, { observe: 'response' }).subscribe((result) => {
      this.isSellerLogedIn.next(true);
      // localStorage.setItem('seller', JSON.stringify(result.body))
      localStorage.setItem('seller', JSON.stringify([result.body]));
      this.router.navigate(['/seller-home'])
    })
  }
  userLogin(data: login) {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' }).subscribe((result: any) => {
      if (result && result.body && result.body.length) {
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.router.navigate(['/seller-home'])
      }
      else {
        this.isLoginError.emit(true);
      }
    })
  }
  sellerReload() {
    if (localStorage.getItem('seller')) {
      this.isSellerLogedIn.next(true);
      this.router.navigate(['/seller-home'])
    }
  }
}
