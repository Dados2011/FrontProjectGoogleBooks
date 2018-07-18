import { Component, OnInit } from '@angular/core';
import { books } from '../../data-books';

@Component({
  selector: 'app-books-list-main',
  templateUrl: './books-list-main.component.html',
  styleUrls: ['./books-list-main.component.scss']
})
export class BooksListMainComponent implements OnInit {

  public bookList: any[];
  constructor() {
    this.bookList = [];
  }

  ngOnInit() {
    this.bookList = books.items;
  }

}
