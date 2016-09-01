import { Injectable, OnInit }     from '@angular/core';
// import { Headers, RequestOptions } from '@angular/http';

import { HttpExtService } from '../../../service/http.service';

@Injectable()
export class SignupService implements OnInit {
  errorMessage: string;
  users: any;
  constructor (private httpExtService: HttpExtService) { }

//   private usersUrl = 'http://private-34927-authapp.apiary-mock.com/users';  // URL to web API
//   private registerUserUrl = 'http://private-34927-authapp.apiary-mock.com/register';

  // ngOnInit() { this.getAll(); }

  // getAll() {
  //   return this.httpExtService.get('/users')
  // }
  // signup(firstName, lastName, email, birth) {
  //   let body = JSON.stringify({ firstName, lastName, email, birth });
  //   return this.httpExtService.post('/register', body)
  //     .then(this.extractData);
  // }
  // extractData() {

  // }
}