import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookListService } from '../../../books-main/services/list/book-list.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  @Output() openAside = new EventEmitter<string>();

  constructor(private bookService: BookListService) { }

  state: string;

  ngOnInit() {
    this.state = 'open';
  }

  open() {
    this.state = this.state === 'open' ? 'close' : 'open';
    this.openAside.emit(this.state);
  }

  searchBooks(text: string) {
    this.bookService.searchBooks(text, 0, 20);
  }

}
