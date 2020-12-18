import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.products$ = this.customerService.getBasket();
  }
}
