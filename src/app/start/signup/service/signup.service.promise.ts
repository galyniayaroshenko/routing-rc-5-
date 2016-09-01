// import { Injectable }     from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Headers, RequestOptions } from '@angular/http';

// import { User }           from './user';

// @Injectable()
// export class SignupPromiseService {
//   errorMessage: string;
//   users: any;
//   constructor (private http: Http) { }

//   private usersUrl = 'http://private-34927-authapp.apiary-mock.com/users';  // URL to web API
//   private registerUserUrl = 'http://private-34927-authapp.apiary-mock.com/register';

//   getUsers (): Promise<User[]> {
//     return this.http.get(this.usersUrl)
//       .toPromise()
//       .then(this.extractData)
//       .catch(this.handleError);
//   }

//   addUser ( email, password, firstName, lastName ): Promise<User> {
//   let body = JSON.stringify({ email, password, firstName, lastName });
//   let headers = new Headers({ 'Content-Type': 'application/json' });
//   let options = new RequestOptions({ headers: headers });

//   return this.http.post(this.registerUserUrl, body, options)
//     .toPromise()
//     .then(this.extractData)
//     .catch(this.handleError);
//   }

//   private extractData(res: Response) {
//     let body = res.json();
//     console.log('body.data', body.data);
//     // console.log('body.status', body.status);
//     //   if (body.status == "OK") {
//     //     console.log('you are registered');
//     //   } else if('status' == 'ERROR:target') {
//     //     console.log('firstName to short or invalid email');
//     //   } 
//     return body.data || { };
//   }

//   private handleError (error: any) {
//     let errMsg = (error.message) ? error.message :
//       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//     console.error(errMsg); 
//     return Promise.reject(errMsg);
//   }
// }