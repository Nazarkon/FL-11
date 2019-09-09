import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService) { }
  ngOnInit(): void {
    this.itemService.getItems().subscribe(items =>{
      console.log(items);
      this.items = items;
    })
  }
}
