import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  @Input() data: Product;
  @Output() productvalueEvent = new EventEmitter<Product>();


  constructor() {
  }

  ngOnInit(): void {

  }
  addToBasket( data: Product) {
       this.productvalueEvent.emit(data.price);
  }

  lastItem(){
    return{
      'last': this.data.stock == 1
    }
  }

}
