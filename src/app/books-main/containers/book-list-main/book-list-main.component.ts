import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../services/list/book-list.service';

@Component({
  selector: 'app-books-list-main',
  templateUrl: './book-list-main.component.html',
  styleUrls: ['./book-list-main.component.scss']
})
export class BooksListMainComponent implements OnInit {

  booksList: any[];

  constructor(private booksService: BookListService) {
    this.booksList = [];
  }

  ngOnInit() {
    this.booksService.getBookList()
    .subscribe((books: any) => {
      if (books) {
        this.booksList = books;
      }
    });

  }

}
