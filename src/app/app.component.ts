import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Product } from './model/product';
import { PRODUCTS } from './model/PRODUCT_Mock';

import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Zenika';
  products: Product[] = [];
  total: number = 0;
  stock: number = 0;
  baskets: Product[] = [];

  constructor(private productService: ProductService, private customerService: CustomerService) {
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products)
    this.customerService.getBasket().subscribe(products => this.baskets = products)
  }
  addProduct(product: Product) {
    this.customerService.addProduct(product).subscribe(res => { console.log(res) })
  }
   displayPrice(price: number) {
    this.total += price;
  }
}


