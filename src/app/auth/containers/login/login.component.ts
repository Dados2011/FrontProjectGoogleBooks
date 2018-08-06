import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/user/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  auth(event: Login){
    if(event){
      localStorage.setItem('bzgooksAppToken', JSON.stringify(event));
    }
  }

}
