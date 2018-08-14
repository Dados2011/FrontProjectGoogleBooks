import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-book-collection',
  templateUrl: './card-book-collection.component.html',
  styleUrls: ['./card-book-collection.component.scss']
})
export class CardBookCollectionComponent implements OnInit {

  @Input() book: any;

  constructor() { }

  ngOnInit() {
  }

}
