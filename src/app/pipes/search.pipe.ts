import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from "../models/restaurant.model";
import { Menu } from "../models/menu.model";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Restaurant[] = [], query?: any): any {
    if (query === "" || query === undefined) {
      return value;
    } else {
      return value.filter((data) => {
        return data.name_restaurant.includes(query) || data.address_restaurant.toString().includes(query);
      })
    }
  }

}
