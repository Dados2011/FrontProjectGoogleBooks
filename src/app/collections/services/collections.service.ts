import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { MessagesService } from '../../alerts/services/messages.service';

@Injectable({
  providedIn: 'root'
})

export class CollectionsService {
  coleRef: AngularFireList<any> = null;
  colOneRef: AngularFireObject<any> = null;


  constructor(private alertService: MessagesService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) {
  }

  listCollections(user: firebase.User): AngularFireList<any[]> {
    return this.coleRef = this.rdb.list('collections/' + user.uid);
  }

  deleteCollection(user: firebase.User, key: any) {
    const itemsRef = this.rdb.list('collections/' + user.uid);
    itemsRef.remove(key);
    }

    getCollection(user: firebase.User, key: any): AngularFireObject<any> {
      return this.colOneRef = this.rdb.object(`collections/${user.uid}/${key}`);
    }

}
