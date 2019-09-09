import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value,items){
    return items.filter(item => {
      return item.title.includes(value)
    })
  }

}