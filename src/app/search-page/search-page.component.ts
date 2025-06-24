import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { addProduct } from '../data-type';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  constructor(private activeRoute: ActivatedRoute, private productService: ProductService) {
  }
  searchresults: undefined | addProduct[]
  noResultFound = "";
  ngOnInit(): void {
    let productQuery = this.activeRoute.snapshot.paramMap.get('query');
    productQuery && this.productService.searchProducts(productQuery).subscribe((result) => {
      if(result.length>0){
      this.searchresults = result;
      }
      else{
        this.noResultFound = "no result found"
      }
    })
  }
}
