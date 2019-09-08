import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value,MyArr){
    return MyArr.filter(item => {
      return item.author.includes(value)
    })
  }

}
