import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createinfo',
  templateUrl: './createinfo.component.html',
  styleUrls: ['./createinfo.component.css']
})
export class CreateinfoComponent implements OnInit {
  
  title:string;
  description:string;
  comment:string;
  date:number;
  author:string;
  url:string
  constructor() { }

  ngOnInit() {
  }
  search(){
    console.log(
    `Title: ${this.title}
    Description: ${this.description}
    Comment: ${this.comment}
    Date: ${this.date}
    Author: ${this.author}
    URL: ${this.url}`
    );
  }
}
