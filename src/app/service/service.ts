import { Injectable, OnInit }         from '@angular/core';

// import { User }               from './user';
import { OverPromiseService } from './http.service';

@Injectable()
export class Service {
  errorMessage: string;
//   users: any;
  constructor (private overPromiseService: OverPromiseService) { }
 
  getAll() {
    return this.overPromiseService.get('http://private-34927-authapp.apiary-mock.com/users');
  }

//  signup(firstName, lastName, email, birth) {
//    let body = JSON.stringify({ firstName, lastName, email, birth });
//    return this.overPromiseService.post('http://private-34927-authapp.apiary-mock.com/register', body);
//  }
}