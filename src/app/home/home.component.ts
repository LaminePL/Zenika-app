import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Zenika';
  products$: Observable<Product[]>;
  total: number = 0;
  stock: number = 0;
  product: Product;

  constructor(private productService: ProductService, private customerService: CustomerService, private router: Router) {

  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  addProduct(product: Product) {
    this.customerService.addProduct(product).subscribe(res => { console.log(res) })
  }

  displayPrice(price: number) {
    this.total += price;
  }

  goToBasket() {
    let link = ['/basket'];
    this.router.navigate(link);
  }
}
