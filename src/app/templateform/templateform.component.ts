import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';
import { Product } from '../model/product';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  customer: Customer;
  basket: Product[];

  constructor(private customerService: CustomerService, private router: Router) {
    this.customer = new Customer();
  }

  ngOnInit(): void {
    this.customerService.getBasket().subscribe(products => this.basket = products);
  }

  checkout() {
    this.customerService.checkout(this.customer).subscribe(() => this.router.navigate(['']));
  }
}
