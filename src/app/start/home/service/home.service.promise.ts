import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { User }           from './user';

@Injectable()
export class HomePromiseService {
  constructor (private http: Http) {}

  // private usersUrl = 'app/users.json';  
private usersUrl = 'http://private-34927-authapp.apiary-mock.com/users';

  getUser (): Promise<User[]> {
    return this.http.get(this.usersUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('body', body);
    console.log('body.data', body.data[0].firstName);
    return body.data || { };
  }

  private handleError (error) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Promise.reject(errMsg);
  }
}