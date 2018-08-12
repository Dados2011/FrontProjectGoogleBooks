import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookList } from '../../models/books';
import { BookListService } from '../../services/list/book-list.service';


 @Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {
  @Input() book: any;
  @Input() booksList : BookList;
  @Output() pushFavorite = new EventEmitter<any>();

  
   ngOnInit() {
  }

  addFavorite() {
    this.pushFavorite.emit(this.book);
  }
 }
