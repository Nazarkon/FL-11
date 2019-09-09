import { Component, OnInit } from '@angular/core';
import { Item } from '../modules/items'
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
   items: Item[];

  constructor(private itemService: ItemService) { 
    
  }
  ngOnInit(): void {
    this.itemService.getItems().subscribe(items =>{
      console.log(items);
      this.items = items;
    })
  }
}
