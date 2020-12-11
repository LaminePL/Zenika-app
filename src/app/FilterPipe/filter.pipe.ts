import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from '../model/product'

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    products.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    return products;


  }

}
