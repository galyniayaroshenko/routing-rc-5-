import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
  
@Component({
  selector: 'popup',
  templateUrl: '../view/popup.html',
  styleUrls: [ '../view/popup.scss' ]
})

export class PopupComponent {
    title = 'I\'m a nested component';

    closePopUpDialog() {
      // this.some = false;
    }
    
}