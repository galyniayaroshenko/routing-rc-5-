// import { Injectable }     from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Headers, RequestOptions } from '@angular/http';

// import { User }           from './user';

// @Injectable()
// export class OverPromiseService {
//   constructor (private http: Http) {}

//   get (url: string) { return this.sendRequestGet(url, null, 'GET') } 
    
//   post (url: string, payload: any) { return this.sendRequestPost(url, payload, 'POST') }
    
//     // put (url: string, payload: any) { return this.sendRequest(url, payload, 'PUT') }
    
//     // delete (url: string, payload: any) {return this.sendRequest(url, null, 'DELETE')}
    

//     sendRequestGet(url: string, payLoad: any, type: string): Promise<User> {
//     return this.http.get(url)
//                     .toPromise()
//                     .then(this.extractData)
//                     .catch(this.handleError);
//     }

//     sendRequestPost(url, body, optionss): Promise<User> {
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//         return this.http.post(url, body, options)
//                         .toPromise()
//                         .then(this.extractData)
//                         .catch(this.handleError);
//     }

//     private extractData(res: Response) {
//     let body = res.json();
//     console.log('body', body);
//     console.log('body.data', body.data);
//     console.log('body.status', body.status);
//         if (body.status == "OK") {
//         console.log('you are registered');
//         } else if('status' == 'ERROR:target') {
//         console.log('firstName to short or invalid email');
//         } 
//     return body.data || { };
//     }

//     private handleError (error) {
//     let errMsg = (error.message) ? error.message :
//         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//     console.error(errMsg); 
//     return Promise.reject(errMsg);
//     }

// }
