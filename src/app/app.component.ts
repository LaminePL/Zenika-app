import { Component } from '@angular/core';
import { Product } from './model/product';
import { PRODUCTS } from './model/PRODUCT_Mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.products = PRODUCTS;

  }

  title = 'Zenika';
  products: Product[];
  total: number = 0;
  stock: number = 0;
  product: Product;


  displayPrice(price: number) {
    this.total += price;
  }
  

  

}


