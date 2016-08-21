import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

import { PopupComponent } from './popup.component';
  
@Component({
  templateUrl: '../view/start.html',
  styleUrls: [ '../view/start.scss' ],
  directives: [ PopupComponent]
})

export class StartComponent {
  some = true;

  timerDialog() {
    this.some = !this.some;
  }
}