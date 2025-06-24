import { Component } from '@angular/core';
import { addProduct } from '../data-type';
import { SellerService } from '../services/seller.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  constructor(private productService: ProductService, private router: Router) { }
  addproductMessage: string | undefined;

  addProduct(data: addProduct, form: NgForm) {
    this.productService.addSellerProduct(data).subscribe((result) => {
      if (result) {
        this.addproductMessage = "Product added successfuly";
        form.reset();
       }
      setTimeout(() => {
        this.addproductMessage = undefined;
      }, 2000);
    })
  }

}
