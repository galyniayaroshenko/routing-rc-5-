import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { User }           from './user';
import { HomePromiseService }       from '../../../service/over-service';

@Injectable()
export class SignupPromiseService {
  errorMessage: string;
  users: any;
  constructor (private http: Http, private homePromiseService: HomePromiseService) { }

  // private usersUrl = 'app/users.json';  // URL to web API



  // getUsers (): Promise<User[]> {
  //   return this.http.get(this.usersUrl)
  //                   .toPromise()
  //                   .then(this.extractData)
  //                   .catch(this.handleError);
  // }

  // addUser ( email, password, firstName, lastName ): Promise<User> {
  // let body = JSON.stringify({ email, password, firstName, lastName });
  // let headers = new Headers({ 'Content-Type': 'application/json' });
  // let options = new RequestOptions({ headers: headers });

  // return this.http.post(this.usersUrl, body, options)
  //                 .toPromise()
  //                 .then(this.extractData)
  //                 .catch(this.handleError);
  // }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   // console.log('body.data', body.data);
  //   return body.data || { };
  // }

  // private handleError (error: any) {
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); 
  //   return Promise.reject(errMsg);
  // }

  // getUsers() {
    
  //   this.homePromiseService.get('http://private-34927-authapp.apiary-mock.com/users')
  //                    .then(
  //                      users => this.users = users,
  //                      error =>  this.errorMessage = <any>error);
  // }
}