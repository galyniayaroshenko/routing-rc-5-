// import { Injectable }     from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Headers, RequestOptions } from '@angular/http';

// import { User }           from './user';
// import { Observable }     from 'rxjs/Observable';

// @Injectable()
// export class HomeService {
//   constructor (private http: Http) {}

//   private usersUrl = 'app/users';  // URL to web API

//   getUser (): Observable<User[]> {
//     return this.http.get(this.usersUrl)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }

//   private extractData(res: Response) {
//     let body = res.json();
//     return body.data || { };
//   }

//   private handleError (error: any) {
//     let errMsg = (error.message) ? error.message :
//       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//     console.error(errMsg); // log to console instead
//     return Observable.throw(errMsg);
//   }
// }