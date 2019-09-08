import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform{


    transform(MyArr,value){
       return MyArr.filter(title => {
           return title.title.includes(value)
       })
    }
}