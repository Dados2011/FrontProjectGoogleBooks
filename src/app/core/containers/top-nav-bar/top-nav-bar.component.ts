import { Component, OnInit } from '@angular/core';
import { Store, } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as layout from '../../actions/layout';
import { BookListService } from '../../../books-main/services/list/book-list.service';
import { ThrowStmt } from '../../../../../node_modules/@angular/compiler';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  state: string;
  isOpenprofile: boolean;
  user: User;
  constructor(private bookService: BookListService, 
    private store: Store<fromRoot.State>,
    private authFire: AngularFireAuth) { 

  }

  ngOnInit() {
    this.isOpenprofile = false;
    this.authFire.authState
    .subscribe(
      user => {
        this.user = user;
      }
    );
  }

  open() {
    if (this.state === 'close') {
      this.state = 'open';
      this.store.dispatch(new layout.OpenSideNav());
    } else {
      this.state = 'close';
      this.store.dispatch(new layout.CloseSideNav());
    }
  }

  searchBooks(text: string) {
    this.bookService.searchBooks(text, 0, 20);
  }

  openProfileInfo() {
    if(this.isOpenprofile) {
      this.isOpenprofile = false;
    } else {
      this.isOpenprofile = true;
    }
  }

}
