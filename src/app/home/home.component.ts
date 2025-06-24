import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { addProduct } from '../data-type';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  icon = faEye
  popularData: undefined | addProduct[];
  allProducts: undefined | addProduct[];
  constructor(private productService: ProductService) {

  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit() {
    this.productService.popularProducts().subscribe((result) => {
      this.popularData = result;

    });
    this.productService.getAllProducts().subscribe((products) => {
      this.allProducts = products;
      // console.log("all Products are ", this.allProducts)
    })
  }
}
