import { Injectable } from '@angular/core';
import { addProduct } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }


  addSellerProduct(product: addProduct) {
    console.log("product service called");
    return this.http.post("http://localhost:3000/product", product);
  }

  productList() {
    return this.http.get<addProduct[]>("http://localhost:3000/product");
  }

  delProduct(id: string) {
    // console.log(id)
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }

  getUpdateProduct(id: string) {
    return this.http.get<addProduct>(`http://localhost:3000/product/${id}`);
  }
  updateSingleProduct(product: addProduct) {
    return this.http.put(`http://localhost:3000/product/${product.id}`, product);
  }

  popularProducts() {
    return this.http.get<addProduct[]>("http://localhost:3000/product?_limit=3");
  }
  getAllProducts() {
    return this.http.get<addProduct[]>("http://localhost:3000/product?_limit=8");
  }

  viewSingleProduct(id: string) {
    return this.http.get<addProduct>(`http://localhost:3000/product/${id}`);
  }

   searchProducts(query:string) {
    return this.http.get<addProduct[]>(`http://localhost:3000/product?category=${query}`);
  }
}
