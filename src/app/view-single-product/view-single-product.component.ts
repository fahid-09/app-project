import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { addProduct } from '../data-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.css']
})
export class ViewSingleProductComponent {
  productdetails: undefined | addProduct;
  productQuantity: number = 1;
  constructor(private productService: ProductService, private activateRoute: ActivatedRoute) {

  }
  ngOnInit() {
    let productId = this.activateRoute.snapshot.paramMap.get('productId')
    //  console.log("the id is ", productid)
    productId && this.productService.viewSingleProduct(productId).subscribe((result) => {
      this.productdetails = result
    })
  }
  handelQuantity(value: string) {
    if (value == 'add' && this.productQuantity < 20) {
      this.productQuantity += 1;
    } else if (value == 'min' && this.productQuantity > 1) {
      this.productQuantity -= 1;

    }
  }
}
