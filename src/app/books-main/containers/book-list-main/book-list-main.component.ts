import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../services/list/book-list.service';
import { BookList } from '../../models/books';

@Component({
  selector: 'app-books-list-main',
  templateUrl: './book-list-main.component.html',
  styleUrls: ['./book-list-main.component.scss']
})
export class BooksListMainComponent implements OnInit {

  booksList: BookList;

  constructor(private booksService: BookListService) {
    this.booksService.searchBooks('Software');
  }

  ngOnInit() {
    this.booksService.bookList
    .subscribe((books: BookList) => {
      if (books) {
        this.booksList = books;
      }
    });

  }

}
