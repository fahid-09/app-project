import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-update-seller-product',
  templateUrl: './update-seller-product.component.html',
  styleUrls: ['./update-seller-product.component.css']
})
export class UpdateSellerProductComponent {
  productData: undefined | Product;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private router: Router,  private productService: ProductService) { }
  ngOnInit(id: number) {
    let productId = this.route.snapshot.paramMap.get('id')
    console.log(productId)
    productId && this.productService.getUpdateProduct(productId).subscribe((data) => {
      console.log(data);
      this.productData = data
    })
  }
  updateProduct(data: Product) {
    if (this.productData) {
      data.id = this.productData.id
    }
    this.productService.updateSingleProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = "the product updated successfuly";
        this.router.navigate(['seller-home'])
      }
      setTimeout(()=>{
        this.productMessage = undefined;
      }, 3000)
    });
  }
}
