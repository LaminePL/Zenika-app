import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../model/PRODUCT_Mock';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  pannier: Array<Product>;
  montant = 0;
  addProduct( product:Product){
  this.pannier.push(product);
  }

  getTotal(){
    this.montant = this.pannier.map(product => product.price).reduce((prev, curr) => prev + curr, 0)
// je recupere mon pannier avec avec les produits.
// avec la fonction .map() je recupere le product price de product
// reduce() recupere tous les price et fait prev + curr a chaque fois pour recuperer le total
  }
  constructor() { }
}
