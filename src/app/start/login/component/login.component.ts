import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
         
// import { AuthService }      from '../service/auth.service';

const styles   = require('../view/login.scss');
const template = require('../view/login.html');

@Component({
  template: template,
  styles: [ styles ]
})

export class LoginComponent {
}

