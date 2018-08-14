import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../services/collections.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss']
})
export class CollectionDetailsComponent implements OnInit {

  public collection: any;
  bookList: any;

  constructor(private colService: CollectionsService, private authFire: AngularFireAuth, private route: ActivatedRoute) { }

  ngOnInit() {
    let key: string;
    this.route.params.subscribe((params: Params) => {
      key = params.key;
      this.getCollectionBooks(key);
    });
  }

  getCollectionBooks(key: string) {
    this.authFire.authState
    .subscribe(
      user => {
        this.colService.getCollection(user, key).valueChanges()
        .subscribe(col => {
          this.collection = col;
          this.bookList = col.list;
        });
      });
  }

}
