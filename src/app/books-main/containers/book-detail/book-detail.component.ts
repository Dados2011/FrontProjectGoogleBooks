import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookListService } from '../../services/list/book-list.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: any;

  constructor(private route: ActivatedRoute,
    private bookservices: BookListService) {
    this.book = {};
  }

  ngOnInit() {
    let id: string;

    this.route.params.subscribe((params: Params) => {
      id = params.id;
      this.bookservices.getBook(id)
      .subscribe((book: any) => {
        this.book = book;
      });
    });

  }

  addFavorite() {
    this.bookservices.addFavorite(this.book);
  }

  createCollection(nameCollection: string) {
    this.bookservices.createCollection(nameCollection);
  }

  addToCollection(collection: any) {
    this.bookservices.updateCollection(collection, this.book);
  }

}
