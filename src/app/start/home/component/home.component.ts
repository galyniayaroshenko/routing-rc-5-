import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

const styles   = require('../view/home.scss');
const template = require('../view/home.html');

@Component({
  template: template,
  styles: [ styles ]
})

export class HomeComponent {}