import { Injectable, OnInit }         from '@angular/core';

import { HttpExtService } from '../../../service/http.service';

@Injectable()
export class HomeService implements OnInit{

  constructor (private httpExtService: HttpExtService) { }
 
  ngOnInit() { this.getAll(); }

  getAll() {
    return this.httpExtService.get('/users')
  }
//  signup(firstName, lastName, email, birth) {
//    let body = JSON.stringify({ firstName, lastName, email, birth });
//    return this.httpPromiseService.post('http://private-34927-authapp.apiary-mock.com/register', body);
//  }
}