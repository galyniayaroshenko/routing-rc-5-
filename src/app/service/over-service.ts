import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { User }           from './user';

@Injectable()
export class HomePromiseService {
  constructor (private http: Http) {}

sendRequestGet(url: string, payLoad: any, type: string): Promise<User> {
        
        return this.http.get(url)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
    }

// sendRequestPost(url, body, options): Promise<User> {
// //    let body = JSON.stringify(payLoad);
// //   let headers = new Headers({ 'Content-Type': 'application/json' });
// //   let options = new RequestOptions({ headers: headers });
//         return this.http.post(url, body, options)
//                     .toPromise()
//                     .then(this.extractData)
//                     .catch(this.handleError);
//     }

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
    

	get (url: string) { return this.sendRequestGet(url, null, 'GET') } 
    
    // post (url: string, payload: any) { return this.sendRequestPost(url, payload, 'POST') }
    
    // put (url: string, payload: any) { return this.sendRequest(url, payload, 'PUT') }
    
    // delete (url: string, payload: any) {return this.sendRequest(url, null, 'DELETE')}
    


}

// export const $http = {
    
// 	get: (url: string) => _sendRequest(url, null, 'GET'),
    
//     post: (url: string, payload: any) => _sendRequest(url, payload, 'POST'),
    
//     put: (url: string, payload: any) => _sendRequest(url, payload, 'PUT'),
    
//     delete: (url: string, payload: any) => _sendRequest(url, null, 'DELETE')
    
// }

    // function _sendRequest(url: string, payLoad: any, type: string): Promise<User> {
        
    //     return this.http.get(this.usersUrl)
    //                 .toPromise()
    //                 .then(this.extractData)
    //                 .catch(this.handleError);
    // }

    
    


    // return new Promise((resolve, reject) => {
        //     var req = new XMLHttpRequest();
        //     req.open(type, url);
        //     req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 
        //     req.onload = () => {
        //         if (req.status == 200) {
        //             resolve(JSON.parse(req.response));
        //         } else {
        //             reject(JSON.parse(req.response));
        //         }
        //     };
 
        //     req.onerror = () => {
        //         reject(JSON.parse(req.response));
        //     };
 
        //     if (payLoad) {
        //         req.send(JSON.stringify(payLoad));
        //     } else {
        //         req.send(null);
        //     }
        // });