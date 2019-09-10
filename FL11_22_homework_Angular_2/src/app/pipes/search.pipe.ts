import { Pipe, PipeTransform } from '@angular/core';




@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

 transform(items,value){
    if(value === undefined){
       value = '';
    }
    return items.filter(title => {
        return title.title.includes(value)
    })
 }

}
