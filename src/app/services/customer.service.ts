import { Injectable, PLATFORM_INITIALIZER } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../model/PRODUCT_Mock'
import { ProductService } from './product.service';
import { ProductComponentComponent } from '../product-component/product-component.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url_api = environment.url_api;
  pannier: Array<Product>;
  montant = 0;

  getTotal() {
    this.montant = this.pannier.map(product => product.price).reduce((prev, curr) => prev + curr, 0)
    // je recupere mon pannier avec avec les produits.
    // avec la fonction .map() je recupere le product price de product
    // reduce() recupere tous les price et fait prev + curr a chaque fois pour recuperer le total
  }

  private handleError<T>(operation = 'operation', results?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(results as T)

    };
  }
  private log(log: string) {
    console.info(log)

  }
  getBasket(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url_api + '/basket')
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url_api + '/basket', product).pipe(
      catchError(this.handleError('addProduct', product))
    );

  }
  checkout(customer: Customer) {
    return this.http.post<Customer>(this.url_api + '/basket/confirm', customer).pipe(
      catchError(this.handleError('checkout', customer))
    );
  }
  constructor(private http: HttpClient) { }
}

//this.customerService.checkout( {name:this.profileForm.get("name")?.value, adress:this.profileForm.get("adress").value, creditCardType:this.creditCard.get('cardNumber') }).subscribe(() => this.router.navigate(['']));

