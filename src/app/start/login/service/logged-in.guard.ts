// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';

// import { LoginComponent } from '../component/login.component';

// @Injectable()
// export class LoggedInGuard implements CanActivate {
//   constructor(public router: Router, private login: LoginComponent) {}

//   canActivate() {
//     if (this.login.isLoggedIn) { return true; }
//     this.router.navigate(['/login']);
//     return false;
//   }
// }