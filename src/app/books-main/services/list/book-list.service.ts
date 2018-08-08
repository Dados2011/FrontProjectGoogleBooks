import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from '../../../../../node_modules/rxjs';
import { MessagesService } from '../../../alerts/services/messages.service';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  url = 'api/';

  constructor(private http: HttpClient,
  private messagesServices: MessagesService) { }

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

  private handleError<T>(operation = 'operation', results?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.messages(`${operation} ha fallado ${error.message}`);
      return of(results as T);
    };
  }

  private messages (msg: string) {
    const type = 'error';
    this.messagesServices.message({msg: msg, type: type});
  }
}
