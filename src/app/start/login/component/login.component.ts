import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
         
import { AuthService }      from '../service/auth.service';

@Component({
  templateUrl: '../view/login.html',
  styleUrls: [ '../view/login.scss' ]
})

export class LoginComponent {
  // message: string;

  constructor(public authService: AuthService, public router: Router) {
    // this.setMessage();
  }

  // setMessage() {
  //   this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  // }

  login() {
    // this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      // this.setMessage();
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  // logout() {
  //   this.authService.logout();
  //   this.setMessage();
  // }
}

