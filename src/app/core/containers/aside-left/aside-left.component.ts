import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../auth/models/user/user';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.scss'],
  animations: [
    trigger('asideAnimation', [
      state('close', style({
        width: '0px'
      })),
      state('open', style({
        width: '300px'
      })),
      transition('open => close', animate('300ms')),
      transition('close => open', animate('300ms'))
    ])
  ]
})
export class AsideLeftComponent implements OnInit {

  user: User;
  @Input() asideState: string;

  constructor() { }

  ngOnInit() {
    this.user = {
      name: 'usuario',
      lastname: 'prueba',
      username: 'pruebaUser',
      email: 'usuario@prueba.com',
      urlImage: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
    };
  }

}
