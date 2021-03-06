import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { MessagesService } from '../../../alerts/services/messages.service';
import { catchError, map} from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { BookList } from '../../models/books';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  url = environment.apiBooks;
  bookList: Subject<BookList> = new Subject();
  favsRef: AngularFireList<any>;
  collectionsRef: AngularFireList<any>;
  user: firebase.User;
  suggestedBooks: Subject<BookList> = new Subject();

  constructor(private http: HttpClient, private alertService: MessagesService,
    private authFire: AngularFireAuth, private rdb: AngularFireDatabase) {
      this.bookList.next({ kind: '', totalItems: 0, items: [] });
      authFire.authState.subscribe(
        user => {
          this.user = user;
          this.favsRef = rdb.list('favorites/' + this.user.uid);
          this.collectionsRef = rdb.list('collections/' + this.user.uid);
        }
      );
    }

  getBookList(id?: string): Observable<any> {
    let url = this.url + 'books';

    if (id) {
      url = url + `/?id= ${id}`;
    }
    return this.http.get(url)
    .pipe(
      catchError(this.handleError('Obtener lista de libros', []))
    );
  }

  searchBooks(text: string, startIndex?: number, maxResults?: number) {
    let url = this.url + `volumes?q=${text}`;
    if (startIndex) {
      url += `&startIndex=${startIndex}`;
    }
    if (maxResults) {
      url += `&maxResults=${maxResults}`;
    }
    this.http.get<BookList>(url)
      .pipe(
        catchError(this.handleError<BookList>('Obtener lista de libros', null))
      )
      .subscribe(
        books => {
          this.bookList.next(books);
        }
      );
  }

  searchSuggestedBooks(text: string, startIndex?: number, maxResults?: number) {
    let url = this.url + `volumes?q=${text}`;
    if (startIndex) {
      url += `&startIndex=${startIndex}`;
    }
    if (maxResults) {
      url += `&maxResults=${maxResults}`;
    }
    this.http.get<BookList>(url)
      .pipe(
        catchError(this.handleError<BookList>('Obtener lista de libros', null))
      )
      .subscribe(
        books => {
          this.suggestedBooks.next(books);
        }
      );
  }
  getBook(id: string): Observable<any> {
    const url = this.url + `volumes/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError('Get Book by ID', null))
    );
  }

  addFavorite(book: any) {
    const promise = this.favsRef.push(book);
    promise.then(() => {
      this.alertService.message({msg: 'Libro agregado a favoritos', type: 'success'});
    });
  }

  createCollection(nameCollection: string) {
    const newCollection = {
      name: nameCollection,
      description: nameCollection,
      list: []
    };
    const promise = this.collectionsRef.push(newCollection);
    promise.then(() => {
      this.alertService.message({msg: 'Nueva colección creada', type: 'success'});
    });
  }

  updateCollection(collection: any, book: any) {
    if (!collection.list) {
      collection.list = [];
    }
    collection.list.push(book);
    // const listCollectionCopy = this.collectionsRef.snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    //   )
    // );
    const promise = this.collectionsRef.update(collection.key, collection);
    promise.then(() => {
      this.alertService.message({msg: 'Libro agregado a la colección', type: 'success'});
    });
  }

  listCollections(): AngularFireList<any[]> {
    return this.collectionsRef;
  }

  private handleError<T>(operation = 'operation', results?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.messages(`${operation} ha fallado ${error.message}`);
      return of(results as T);
    };
  }

  private messages (msg: string) {
    const type = 'error';
    this.alertService.message({ msg: msg, type: type });
  }
}
