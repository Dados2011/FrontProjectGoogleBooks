import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 @Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {
  @Input() book: any;
  @Output() pushFavorite = new EventEmitter<any>();
  @Output() createCollection = new EventEmitter<string>();
  @Output() addToCollection = new EventEmitter<any>()

  public addToCollectionVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.addToCollectionVisible = false;
  }

  addFavorite() {
    this.pushFavorite.emit(this.book);
  }

  addItemCollection() {
    this.addToCollectionVisible = true;
  }

  addItemToCollection(collection: any) {
    this.addToCollection.emit(collection);
  }

  createNewCollection(nameNewCollection: string) {
    this.createCollection.emit(nameNewCollection);
  }
 }
