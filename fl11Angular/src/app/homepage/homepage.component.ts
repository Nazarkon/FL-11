import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  myArr = [];
  private name: string;
  constructor(private data: DataService) { }
  ngOnInit(): void {
  this.myArr = this.data.getData();
  }

}
