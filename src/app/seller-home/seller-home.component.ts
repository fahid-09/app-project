import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';
import { faTrash, faPen, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  constructor(private productService: ProductService) { }
  productList: undefined | Product[];
  productMessage: string | undefined;
  icon = faTrash;
  editIcon = faPen;
  viewIcon = faEye;
  // heartIcon = faHeart;

  // isLiked : boolean = false;

  ngOnInit() {
    this.AllProductList();
  }

  AllProductList() {
    this.productService.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    })
  }

  deleteProduct(id: string) {
    this.productService.delProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "the product deleted successfuly";
        this.AllProductList();
      }
      setTimeout(() => {
        this.productMessage = undefined;
      }, 2000);

    });
  }

  // editProduct(id: string) {
  //   // this.productService.updateProduct(id)}
  //   console.log("id ", id)
  // }
}
