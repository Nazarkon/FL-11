import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../modules/items';

@Component({
  selector: 'app-createinfo',
  templateUrl: './createinfo.component.html',
  styleUrls: ['./createinfo.component.css']
})
export class CreateinfoComponent implements OnInit {
   item: Item = {
     title: '',
     description: '',
     shortDescription:'',
     author: '',
     date:'',
     url:''
   }
  constructor(private itemService: ItemService) {
   }

  ngOnInit() {

  }
  onSubmit(){
    if(this.item.title != '' && this.item.description != '' && this.item.shortDescription != '' && this.item.author != '' && this.item.date != '' && this.item.url !=''){
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
      this.item.shortDescription = '';
      this.item.author = '';
      this.item.date = '';
      this.item.url = '';

    }
  }
}
