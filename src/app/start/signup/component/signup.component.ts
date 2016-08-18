import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
  
const styles   = require('../view/signup.scss');
const template = require('../view/signup.html');

@Component({
  template: template,
  styles: [ styles ]
})

export class SignupComponent {}