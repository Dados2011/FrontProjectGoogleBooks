import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookListService } from '../../services/list/book-list.service';
import { BookList } from '../../models/books';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: any;
  booksList: Observable<BookList>;


  constructor(private route: ActivatedRoute,
    private booksServices: BookListService) {
    this.book = {};
  }

  ngOnInit() {
    let id: string;
    this.route.params.subscribe((params: Params) => {
      id = params.id;
      this.booksServices.getBook(id)
      .subscribe((book: any) => {
        this.book = book;
        if(this.book.volumeInfo.authors && this.book.volumeInfo.authors.length > 0) {
          this.booksServices.searchSuggestedBooks(this.book.volumeInfo.authors[0]);
        } else {
          this.booksServices.searchSuggestedBooks(this.book.volumeInfo.title);
        }
        this.booksList =this.booksServices.suggestedBooks;
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
