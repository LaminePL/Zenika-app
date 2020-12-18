import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url_api = environment.url_api;
  pannier: Array<Product>;
  montant = 0;

  getTotal() {
    this.montant = this.pannier.map(product => product.price).reduce((prev, curr) => prev + curr, 0);
  }

  private handleError<T>(operation = 'operation', results?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(results as T);

    };
  }
  private log(log: string) {
    console.info(log);

  }
  getBasket(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url_api + '/basket');
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
