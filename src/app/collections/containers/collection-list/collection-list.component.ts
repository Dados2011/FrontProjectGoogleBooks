import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { CollectionsService } from '../../services/collections.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {

  collectionList: Observable<any[]>;

  constructor(private colService: CollectionsService, private authFire: AngularFireAuth) { }

  ngOnInit() {
    this.authFire.authState
    .subscribe(
      user => {
        this.collectionList =  this.colService.listCollections(user).snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        );
      }
    );
  }

  deleteCollection(key: any) {
    this.authFire.authState
    .subscribe(
      user => {
        this.colService.deleteCollection(user, key);
      }
    );
  }

}
