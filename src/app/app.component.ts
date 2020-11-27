import { Component } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { cpuUsage } from 'process';
import { Product } from './model/product';
import { PRODUCTS } from './model/PRODUCT_Mock';

import{CustomerService} from './services/customer.service';
import{ProductService} from './services/product.service';

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


