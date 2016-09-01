import { Injectable } from '@angular/core';
import { Router, NavigationExtras }         from '@angular/router';

@Injectable()
export class HttpConfigService {
  public apiUrl: String;
  public defaultHandlers: Object;

  constructor (public router: Router) {
    this.apiUrl = 'http://private-34927-authapp.apiary-mock.com';
    this.defaultHandlers = {
      // BAD_REQUEST: () => {
      // },
      // CREATED: () => {
      // },
      // OK: () => {       
      // }
      501: () => {
        console.log('Not implemented'); 
        return this.router.navigate(['/start']);
      },
      404: () => {
        console.log('Not founded'); 
        return this.router.navigate(['/start']);
      },
      401: () => { 
        console.log('Unantorized');
        return this.router.navigate(['/start']);
      },
      400: () => { 
        console.log('Bad request');
        return this.router.navigate(['/start']);
      },
      201: () => {
        console.log('created');
        return this.router.navigate(['/start/login'])
      },
      200: () => {
        console.log('ok'); 
        return this.router.navigate(['/home']) 
      }
    }
  }
}

