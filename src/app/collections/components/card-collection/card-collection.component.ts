import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.scss']
})
export class CardCollectionComponent implements OnInit {

  @Input() collection: any;

  constructor() { }

  ngOnInit() {

  }

}