import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
  
const styles   = require('../view/start.scss');
const template = require('../view/start.html');

@Component({
  template: template,
  styles: [ styles ]
})

export class StartComponent {}