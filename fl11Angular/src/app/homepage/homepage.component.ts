import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  searchStr = '';
  constructor(private data: NewsService) { }
  ngOnInit(): void {
  this.data.getData();
  }

}
