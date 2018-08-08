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
      this.bookservices.getBookList(id)
      .subscribe((book: any) => {
        this.book = book[0];
      });
    });

  }

}
