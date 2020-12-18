import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {
  @Input() data: Product;
  // example observable  avec html  home.component a revoir !
  @Output() productvalueEvent = new EventEmitter<Product>();

  addToBasket(data: Product) {
    this.productvalueEvent.emit(data);
  }
}
