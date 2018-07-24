import { Component, OnInit } from '@angular/core';
import { books } from '../../../data-books';

@Component({
  selector: 'app-books-list-main',
  templateUrl: './book-list-main.component.html',
  styleUrls: ['./book-list-main.component.scss']
})
export class BooksListMainComponent implements OnInit {

  booksList: any[];

  constructor() {
    this.booksList = [];
  }

  ngOnInit() {
    this.booksList = books.items;
  }

}
