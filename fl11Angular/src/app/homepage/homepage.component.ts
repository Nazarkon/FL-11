import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  searchStr = '';
  nature:string;
  politic:string;
  sport:string;
  author:string;
  midify:string;
  constructor(private data: NewsService) { 
    
  }
  ngOnInit(): void {
  this.data.getData();
  this.author = "24tv.ua";

  }
   customFunction(val:any){
     
    this.midify = `Value  ${this.MyArr}`
    console.log(this.midify)
  }

}
