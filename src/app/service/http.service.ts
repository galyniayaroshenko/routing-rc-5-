import { Injectable } from '@angular/core';

import { 
  Http, 
  Response, 
  Headers, 
  RequestOptions 
} from '@angular/http';
import { Router,
         NavigationExtras }         from '@angular/router';

// import { HttpConfigService } from './http-config.service';
import { CONFIG } from './http-config.service'

@Injectable()
export class HttpExtService {
  constructor (private http: Http, public router: Router) {}

  delete(url: string): HttpRequest {
    return new HttpRequest(this.http.delete(`${CONFIG.apiUrl}${url}`).toPromise());
  }
  get(url: string): HttpRequest {
    return new HttpRequest(this.http.get(`${CONFIG.apiUrl}${url}`).toPromise());
  }
  post(url: string, data: Object): HttpRequest {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });

    return new HttpRequest(this.http.post(`${CONFIG.apiUrl}${url}`, options).toPromise());
  }
  put(url: string, data: Object): HttpRequest {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });

    return new HttpRequest(this.http.put(`${CONFIG.apiUrl}${url}`, options).toPromise());
  }
}

const httpCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400
}

class HttpRequest {           

  private handlers: Object;

  constructor (private httpPromise: Promise<any>) {
    this.handlers = {};

    httpPromise.then(
      response => this.successHandle(response), 
      response => this.errorHandle(response)
    );
  }

  /* puplic methods */
  public BAD_REQUEST(onError) {
    this.handlerDefine(httpCodes.BAD_REQUEST, { onError }); 
    return this;
  }

  public OK(onSuccess, onError) {
    this.handlerDefine(httpCodes.OK, { onSuccess, onError }); 
    return this;
  } 

  /* private methods */
  private errorHandle(response: any) { // !! any -> Response
    this.handlerGet(response).error(response);
  }

  private handlerDefine(httpCode, handler) {
    if (httpCode in this.handlers) {
      throw new Error(`Handler for code ${httpCode} alrady defined`);
    }
    this.handlers[httpCode] = handler;
  }

  private handlerGet(response: any): any {    
    var handler = this.handlers[response.status] || CONFIG.defaultHandlers[response.status]();
    console.log('CONFIG.defaultHandlers[response.status]', CONFIG.defaultHandlers[response.status]);
    console.log('response.status', response.status);
    // CONFIG.defaultHandlers[response.status]();
    if (handler) {
      return handler;
    }

    throw new Error(`Unexpected response status: ${response.status}`);
  }

  private successHandle(response) {
    const responseBody = response.json();
    const handler = this.handlerGet(response);

    // validator.objectValidate(responseBody, {
    //   status: [String, ['OK', 'ERROR:general', 'ERROR:target']],
    //   data: [Object, Array]
    // })

    const [status, substatus] = responseBody.status.split(':');
    console.log('status', status);
    console.log('substatus', substatus);
    

    switch (status) {
      case 'OK':
        handler.onSuccess(responseBody.data);
        break;
      case 'ERROR':
        switch(substatus) {
          case 'general':
            handler.onError(responseBody.data, substatus);            
            break;
          case 'target':
            handler.onError(responseBody.data, substatus);
            break;
          default:
            throw new Error(`Unexpected response body substatus: ${responseBody.status}`);
        }
        break;
      default:
        throw new Error(`Unexpected response body status: ${status}`);    
    }
  }
}
