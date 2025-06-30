import { EventEmitter, Injectable } from '@angular/core';
import { cart, Product } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  cartdata = new EventEmitter<Product[] | []>()
  addSellerProduct(product: Product) {
    console.log("product service called");
    return this.http.post("http://localhost:3000/product", product);
  }

  productList() {
    return this.http.get<Product[]>("http://localhost:3000/product");
  }

  delProduct(id: string) {
    // console.log(id)
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }

  getUpdateProduct(id: string) {
    return this.http.get<Product>(`http://localhost:3000/product/${id}`);
  }
  updateSingleProduct(product: Product) {
    return this.http.put(`http://localhost:3000/product/${product.id}`, product);
  }

  popularProducts() {
    return this.http.get<Product[]>("http://localhost:3000/product?_limit=3");
  }
  getAllProducts() {
    return this.http.get<Product[]>("http://localhost:3000/product?_limit=8");
  }

  viewSingleProduct(id: string) {
    return this.http.get<Product>(`http://localhost:3000/product/${id}`);
  }

  searchProducts(query: string) {
    return this.http.get<Product[]>(`http://localhost:3000/product?category=${query}`);
  }
  localAddToCart(data: Product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    }
    else {
      cartData = JSON.parse(localCart)
      cartData.push(data)
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartdata.emit(cartData);

  }
  removeItemFromCart(productId: string) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: Product[] = JSON.parse(cartData);
      items = items.filter((item: Product) =>   productId !== item.id);
      // console.log(items);
      localStorage.setItem('localCart', JSON.stringify(items));
    this.cartdata.emit(items);
    }
  }
  addToCart(cartData: cart){
    return this.http.post("http://localhost:3000/cart", cartData);
  }
}
