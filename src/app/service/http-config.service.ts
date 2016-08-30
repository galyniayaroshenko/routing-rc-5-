// import { Injectable } from '@angular/core';
import { Router,
         NavigationExtras }         from '@angular/router';

// @Injectable()
// export class HttpConfigService {
//   // public CONFIG: Object;

//   constructor (public router: Router) {}
   
//    CONFIG = {
//     apiUrl : 'http://private-34927-authapp.apiary-mock.com',
//     defaultHandlers: {
//       // BAD_REQUEST: () => {
//       //   return this.router.navigate(['/start']);
//       // },
//       // CREATED: () => {
//       //   return 201;
//       // },
//       // OK: () => {
//       //   return 200;        
//       // }
//       404: () => { /*this.router.navigate(['/start'])*/ console.log('Not founded'); alert('Not founded')},
//     400: () => { /*this.router.navigate(['/start'])*/ console.log('bad'); alert('Bad request')},
//     201: () => { /*this.router.navigate(['/home'])*/alert('Created')},
//     200: () => { /*this.router.navigate(['/home])*/console.log('smile'); alert('Success')}
//     }
//   }
// }

export const CONFIG = {
  apiUrl : 'http://private-34927-authapp.apiary-mock.com',
  defaultHandlers: {
    404: () => { /*this.router.navigate(['/start'])*/ console.log('Not founded'); /*alert('Not founded')*/},
    400: () => { /*this.router.navigate(['/start'])*/ console.log('Bad request'); /*alert('Bad request')*/},
    201: () => { /*this.router.navigate(['/home'])*//*alert('Created') */ console.log('Success');},
    200: () => { /*this.router.navigate(['/home']);*/ console.log('Success');  /*alert('Success')*/}
  }
}

