import { Injectable } from '@angular/core';

import { 
  Http, 
  Response, 
  Headers, 
  RequestOptions 
} from '@angular/http';

@Injectable()
export class HttpExtService {
  constructor (private http: Http) {}

  delete(url: string): HttpRequest {
    return new HttpRequest(this.http.delete(url).toPromise());
  }
  get(url: string): HttpRequest {
    return new HttpRequest(this.http.get(url).toPromise());
  }
  post(url: string, data: Object): HttpRequest {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });

    return new HttpRequest(this.http.post(url, options).toPromise());
  }
  put(url: string, data: Object): HttpRequest {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });

    return new HttpRequest(this.http.put(url, options).toPromise());
  }
}

const httpCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400
}

class HttpRequest {           
  public OK: Function;
  public BAD_REQUEST: Function;

  private handlers: Object;

  constructor (private httpPromise: Promise<any>) {
    this.OK = this.multipleHandlerDefine(httpCodes.OK);
    this.BAD_REQUEST = this.singleHandlerDefine(httpCodes.BAD_REQUEST);

    this.handlers = {};

    httpPromise.then(
      response => this.successHandle(response), 
      response => this.errorHandle(response)
    );
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
    var handler = this.handlers[response.status]/* || this.defaultHandlers[response.status]*/;    

    if (handler) {
      return handler;
    }

    throw new Error(`Unexpected response status: ${response.status}`);
  }

  private singleHandlerDefine(httpCode) {
    return function(onError) {
      this.handlerDefine(httpCode, {
        error: onError
      })
      return this;
    }
  }

  private multipleHandlerDefine(httpCode) {
    return function(onSuccess, onError) {
      this.handlerDefine(httpCode, {
        success: onSuccess,
        error: onError
      })
      return this;
    }
  }

  private successHandle(response) {
    const responseBody = response.json();
    const handler = this.handlerGet(response);

    // validator.objectValidate(responseBody, {
    //   status: [String, ['OK', 'ERROR:general', 'ERROR:target']],
    //   data: [Object, Array]
    // })

    const [status, substatus] = responseBody.status.split(':');

    switch (status) {
      case 'OK':
        handler.success(responseBody.data);
        break;
      case 'ERROR':
        switch(substatus) {
          case 'general':
            handler.error(responseBody.data, substatus);            
            break;
          case 'target':
            handler.error(responseBody.data, substatus);
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
