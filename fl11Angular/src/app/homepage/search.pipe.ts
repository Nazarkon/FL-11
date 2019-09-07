import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform{
    transform(myArr,value){
       return myArr.filter(title => {
           return title.title.includes(value)
       })
    }
}