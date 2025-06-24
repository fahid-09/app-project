import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { ProductService } from '../services/product.service';
import { addProduct } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = "default";
  sellerName: string = "";
  userName: string = "";
  searchResult: undefined | addProduct[]
  constructor(private router: Router, private sellerService: SellerService, private productService: ProductService) { }
  ngOnInit() {
    // check the url 
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0]
          this.sellerName = sellerData.name;
          this.menuType = "seller";
        }
        else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userdata = userStore && JSON.parse(userStore);
          this.userName = userdata.name;
          this.menuType = "user";
      }
      else {
        this.menuType = "default";
      }
    }
  });
}

sellerLogout() {
  localStorage.removeItem('seller');
  this.router.navigate(['/'])
}
searchproduct(query: KeyboardEvent) {
  if (query) {
    const element = query.target as HTMLInputElement;
    this.productService.searchProducts(element.value).subscribe((result) => {
      if (result)
        this.searchResult = result

    })
  }
}
hideSearchResult() {
  this.searchResult = undefined;
}

submitSearch(val: string) {
  this.router.navigate([`search/${val}`])
}
redirectToDetails(id: string) {
  console.log(id)
  this.router.navigate(['/view-product/' + id])
}

logOutUser(){
  localStorage.removeItem('user');
  this.router.navigate(['/user-auth'])
}
}
