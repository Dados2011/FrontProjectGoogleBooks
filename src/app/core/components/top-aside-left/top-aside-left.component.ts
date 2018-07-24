import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../auth/models/user/user';

@Component({
  selector: 'app-top-aside-left',
  templateUrl: './top-aside-left.component.html',
  styleUrls: ['./top-aside-left.component.scss']
})
export class TopAsideLeftComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}