import { Component, OnInit } from '@angular/core';
import { NewsService } from '../homepage/news.service';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {

  constructor(private data: NewsService) { }
  ngOnInit(): void {
  this.data.getData();
  }
}
