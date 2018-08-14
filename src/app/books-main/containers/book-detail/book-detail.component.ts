import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookListService } from '../../services/list/book-list.service';
import { BookList } from '../../models/books';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: any;
  booksList: BookList;


  constructor(private route: ActivatedRoute,
    private booksServices: BookListService) {
    this.book = {};
    this.booksServices.searchBooks('software');
  }

  ngOnInit() {
    let id: string;
    
    this.booksServices.bookList
    .subscribe((books: BookList) => {
      if (books) {
        this.booksList = books;
      }
    });
    this.route.params.subscribe((params: Params) => {
      id = params.id;
      this.booksServices.getBook(id)
      .subscribe((book: any) => {
        this.book = book;
      });
    });
    
  }

  addFavorite(event) {
    this.booksServices.addFavorite(event);
  }

  createCollection(nameCollection: string) {
    this.booksServices.createCollection(nameCollection);
  }

  addToCollection(collection: any) {
    this.booksServices.updateCollection(collection, this.book);
  }

}
