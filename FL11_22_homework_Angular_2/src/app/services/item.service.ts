import { Injectable } from '@angular/core';
import { Item } from '../modules/items';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

   itemsCollections: AngularFirestoreCollection<Item>;
   items: Observable<Item[]>;
  constructor(public afs:AngularFirestore) { 
         //this.items= this.afs.collection('Item').valueChanges();
         this.itemsCollections = this.afs.collection('Item');
         this.items = this.itemsCollections.snapshotChanges().pipe(map(changes => {
          return changes.map(a=>{
            const data = a.payload.doc.data() as Item
            data.id = a.payload.doc.id;
            return data;
          });
        }));
  }

  getItems(){
    return this.items;
  }

  addItem(item : Item){
    this.itemsCollections.add(item);

  }
}
