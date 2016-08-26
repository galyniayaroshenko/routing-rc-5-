import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router,
         NavigationExtras } from '@angular/router';

import { User }           from './user';

@Injectable()
export class LoginService {

  constructor (public router: Router, private http: Http) {}

//   private loginUrl = 'http://private-34927-authapp.apiary-mock.com/login';
   
 login(email, password) {
    // event.preventDefault();
    let body = JSON.stringify({ email, password });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://private-34927-authapp.apiary-mock.com/login', body, {  headers: headers })
   
  }

}