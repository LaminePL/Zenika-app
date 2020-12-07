import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { PRODUCTS } from '../model/PRODUCT_Mock';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  produts = PRODUCTS;
  url_api = environment.url_api;

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url_api + '/products');
  }
  isTheLast(product:Product){
    return product.stock ===1;
  }
  isAvailable(product: Product) {
    return product.stock !== 0;

  }
  decreaseStock(product: Product){
    product.stock = product.stock -1;

  }


}
