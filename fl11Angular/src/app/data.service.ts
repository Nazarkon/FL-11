import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() : any[]{
    return [
      {'id':'1','title':'Nature news', 'desc':'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.', 'date':'24/09/2021','time':'12:15', 'imageUrl':'../img/nature.jpg'},
      {'id':'2','title':'City News', 'desc':'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.', 'date':'12/06/2019','time':'10:25', 'imageUrl':'../img/City.png'},
      {'id':'3','title':'Animal', 'desc':'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.', 'date':'5/10/2017','time':'15:35','imageUrl':'../img/Dog.jpg'},
      {'id':'4','title':'Last News', 'desc':'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.', 'date':'5/11/2012','time':'16:35','imageUrl':'../img/Dog.jpg'},
    ]
 }
  constructor() { }
}
