import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookListService } from '../../services/list/book-list.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.scss']
})
export class AddCollectionComponent implements OnInit {

  instancesDatabase: any;
  selectedCollection: any;
  @Output() createNewCollection = new EventEmitter<string>();
  @Output() addToCollection = new EventEmitter<any>();

  constructor(private bookservices: BookListService) { }

  ngOnInit() {
    this.instancesDatabase = this.bookservices.listCollections().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  addCollection = (collection: string) => {
    this.createNewCollection.emit(collection);
    // return {name: collection};
  }

  addNewItemToCollection() {
    if (this.selectedCollection) {
      this.addToCollection.emit(this.selectedCollection);
    }
  }

}
