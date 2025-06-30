import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, Product } from '../data-type';
import { ActivatedRoute } from '@angular/router';
import { JsonpInterceptor } from '@angular/common/http';


@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.css']
})
export class ViewSingleProductComponent {
  productdetails: undefined | Product;
  productQuantity: number = 1;
  removeCart: boolean = false;
  constructor(private productService: ProductService, private activateRoute: ActivatedRoute) {

  }
  ngOnInit() {
    let productId = this.activateRoute.snapshot.paramMap.get('productId')
    //  console.log("the id is ", productId)
    productId && this.productService.viewSingleProduct(productId).subscribe((result) => {
      this.productdetails = result;

      let cartData = localStorage.getItem('localCart');
      // console.log("the cart data is", cartData )
      if (productId && cartData) {
        let items = JSON.parse(cartData);
        items = items.filter((item: Product) => productId == item.id.toString())
        // console.log(items)
        if (items.length) {
          this.removeCart = true;
        }
        else {
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
      if (!localStorage.getItem('user')) {
        this.productService.localAddToCart(this.productdetails);
        this.removeCart = true;
      } else {
        // console.log("user is logged in ");
        let user = localStorage.getItem('user');
        // console.log(user);
        let userId = user && JSON.parse(user).id;
        // console.log(userId);
        let cartData: cart = {
          ...this.productdetails, userId, productId: this.productdetails.id
        }
        delete cartData.id;
        // console.log(cartData);
        this.productService.addToCart(cartData).subscribe((result) => {
          console.log(result);

        })


      }
    }

  }
  removeToCart(id: any) {
    this.productService.removeItemFromCart(id);
    this.removeCart = false;


  }
}
