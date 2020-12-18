import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    products.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    return products;
  }
}
