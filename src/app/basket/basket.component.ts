import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Product } from '../model/product';
import { PRODUCTS } from '../model/PRODUCT_Mock';

import{CustomerService} from '../services/customer.service';
import{ProductService} from '../services/product.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  products: Product[]= [];

  constructor(  private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getBasket().subscribe(products => this.products = products)

  }

}
