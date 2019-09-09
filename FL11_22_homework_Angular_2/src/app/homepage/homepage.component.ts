import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public newArr :[];
  searchStr = '';
  nature:string;
  politic:string;
  sport:string;
  author:string;
  midify:string;
  constructor() { 
    
  }
  ngOnInit(): void {

  }
   customFunction(val:any){
     
    this.midify = `Value  ${this.author}`
    console.log(this.midify);
    alert('Я не зумів доступитись до масиву,щоб його фільтрувати(((')
  }

}
