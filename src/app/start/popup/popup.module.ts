import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

// import { HomeComponent }    from './component/home.component';
import { RootPopupPromiseComponent }    from './component/root-popup.component';
import { AuthService }      from '../login/service/auth.service';

import { popupRouting } from './popup.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    popupRouting 
  ],
  declarations: [
    // HomeComponent,
    RootPopupPromiseComponent 
  ],
  providers: [
    AuthService 
  ]
})
export class PopupModule {}