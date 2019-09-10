import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../modules/items';


@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {
  public items:Item[];

 constructor(private itemService: ItemService) { 
   
 }
 ngOnInit(): void {
   this.itemService.getItems().subscribe(items =>{
     this.items = items;
   })
}
}
