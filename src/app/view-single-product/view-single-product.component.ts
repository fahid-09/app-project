import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.css']
})
export class ViewSingleProductComponent {
  productdetails: undefined | Product;
  productQuantity: number = 1;
  removeCart: boolean =  false;
  constructor(private productService: ProductService, private activateRoute: ActivatedRoute) {

  }
  ngOnInit() {
    let productId = this.activateRoute.snapshot.paramMap.get('productId')
     console.log("the id is ", productId)
    productId && this.productService.viewSingleProduct(productId).subscribe((result) => {
      this.productdetails = result;

      let cartData = localStorage.getItem('localCart');
      console.log("the cart data is", cartData )
      if (productId && cartData) {
        let items = JSON.parse(cartData);
        items = items.filter((item: Product) =>   productId == item.id.toString())
        console.log(items)
        if(items.length){
          this.removeCart = true;
        }
        else{
          this.removeCart = false;
        }
      }
    })
  }
  handelQuantity(value: string) {
    if (value == 'add' && this.productQuantity < 20) {
      this.productQuantity += 1;
    } else if (value == 'min' && this.productQuantity > 1) {
      this.productQuantity -= 1;
    }
  }
  addToCart() {
    if (this.productdetails) {
      this.productdetails.quantity = this.productQuantity
      // console.log(this.productdetails.quantity, this.productdetails);
      if (!localStorage.getItem('user')) {
        this.productService.localAddToCart(this.productdetails)
      }
    }
  }
  removeToCart() {

  }
}
