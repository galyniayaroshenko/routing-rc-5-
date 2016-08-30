// import { Injectable } from '@angular/core';
import { Router,
         NavigationExtras }         from '@angular/router';

// @Injectable()
// export class HttpConfigService {
  // public CONFIG: Object;

  // constructor (public router: Router) {}
   
//    CONFIG = {
//     apiUrl : 'http://private-34927-authapp.apiary-mock.com',
//     defaultHandlers: {
//       BAD_REQUEST: () => {
//         return this.router.navigate(['/start']);
//       },
//       CREATED: () => {
//         return 201;
//       },
//       OK: () => {
//         return 200;        
//       }
//     }
//   }
// }

export const CONFIG = {
    apiUrl : 'http://private-34927-authapp.apiary-mock.com',
    defaultHandlers: {
      400: () => { this.router.navigate(['/start']); },
      201: () => { this.router.navigate(['/home']);},
      200: () => { this.router.navigate(['/start']);}
    }
  }