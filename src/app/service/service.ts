import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Headers, RequestOptions } from '@angular/http';

import { User }           from './user';
import { HomePromiseService }       from './over-service';

@Injectable()
export class Service {
  errorMessage: string;
  users: any;
  constructor (private http: Http, private homePromiseService: HomePromiseService) { }
 
 getAll() {
  	return this.homePromiseService.get('http://private-34927-authapp.apiary-mock.com/users');
  }
}