import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items || !searchText) {
      return items;
    }

    return items.filter(item => item.name.toLowerCase().includes(searchText));
  }

}
