import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {
  
  constructor() { }

  canActivate(): Observable<boolean>{
    return of(!!localStorage.getItem('bzgooksAppToken'));
  }
}
