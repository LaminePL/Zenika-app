import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { PRODUCTS } from '../model/PRODUCT_Mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  produts = PRODUCTS;

  getProduct(): Product[] {
    return PRODUCTS;
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

  constructor() { }
}
