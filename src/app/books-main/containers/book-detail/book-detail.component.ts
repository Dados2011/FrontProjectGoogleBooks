import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { books } from '../../../data-books';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: any;

  constructor(private route: ActivatedRoute) {
    this.book = {};
  }

  ngOnInit() {
    let id: string;

    this.route.params.subscribe((params: Params) => {
      id = params.id;
      this.book = books.items.find(function(item) {
        return item.id === id;
      });
    });

  }

}
