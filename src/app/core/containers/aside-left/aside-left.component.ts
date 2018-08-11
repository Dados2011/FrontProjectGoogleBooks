import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

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

  constructor(private authFire: AngularFireAuth) { }

  ngOnInit() {
    this.authFire.authState
    .subscribe(
      user => {
        this.user = user;
      }
    );
  }

}
