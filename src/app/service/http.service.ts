let validate = require("validate.js");
import { Injectable, Inject } from '@angular/core';
// import { validate } from 'validate.js';

import { 
  Http, 
  Response, 
  Headers, 
  RequestOptions 
} from '@angular/http';
import { Router, NavigationExtras } from '@angular/router';

import { HttpConfigService } from './http-config.service'

@Injectable()
export class HttpExtService {
  constructor (
    private http: Http, 
    public router: Router, 
    private httpConfigService: HttpConfigService
  ) {}

  delete(url: string): HttpRequest {
    return new HttpRequest(
      this.http.delete(`${this.httpConfigService.apiUrl}${url}`).toPromise(),
      this.httpConfigService.defaultHandlers
    );
  }
  get(url: string): HttpRequest {
    return new HttpRequest(
      this.http.get(`${this.httpConfigService.apiUrl}${url}`).toPromise(), 
      this.httpConfigService.defaultHandlers
    );
  }
  post(url: string, data: Object): HttpRequest {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });

    return new HttpRequest(
      this.http.post(`${this.httpConfigService.apiUrl}${url}`, options).toPromise(), 
      this.httpConfigService.defaultHandlers
    );
  }
  put(url: string, data: Object): HttpRequest {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });

    return new HttpRequest(
      this.http.put(`${this.httpConfigService.apiUrl}${url}`, options).toPromise(), 
      this.httpConfigService.defaultHandlers
    );
  }
}

const httpCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400
}

class HttpRequest {          
  private handlers: Object;

  constructor (private httpPromise: Promise<any>, private defaultHandlers: any) {
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
    var handler = this.handlers[response.status] || this.defaultHandlers[response.status]();
    if (handler) {
      return handler;
    }

    throw new Error(`Unexpected response status: ${response.status}`);
  }

  private objectValidator(response) {
    const responseBody = response.json();
    
    let constraints = {
      status: {
        presence: true,
        exclusion: {
          within: ['OK', 'ERROR:general', 'ERROR:target'],
          message: "'%{value}' is allowed"
        }
      }
    };

    let funcResult = validate({status: responseBody.status}, constraints);
    let objectResult = validate.isObject(responseBody.data);
    let arrayResult = validate.isArray(responseBody.data);

    if (funcResult == undefined || objectResult == false || arrayResult == false)
      return false;
      return true;
  }

  private successHandle(response) {
    const responseBody = response.json();
    const handler = this.handlerGet(response);
    const resutlObjectValidator = this.objectValidator(response);

    if (resutlObjectValidator == false) {
      throw new Error(`!Unexpected response body: ${responseBody}`);
    }
    
    const [status, substatus] = responseBody.status.split(':');

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
