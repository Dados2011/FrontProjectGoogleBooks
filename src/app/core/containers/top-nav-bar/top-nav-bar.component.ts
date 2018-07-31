import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  @Output() openAside = new EventEmitter<string>();
  constructor() { }

  state: string;
  ngOnInit() {
    this.state = 'open';
  }

  open() {
    this.state = this.state === 'open' ? 'close' : 'open';
    this.openAside.emit(this.state);
  }

}
