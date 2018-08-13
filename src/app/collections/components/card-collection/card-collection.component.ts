import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.scss']
})
export class CardCollectionComponent implements OnInit {

  @Input() collection: any;
  @Output() deleteCollection = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteCollections() {
    this.deleteCollection.emit(this.collection.key);
  }
}
