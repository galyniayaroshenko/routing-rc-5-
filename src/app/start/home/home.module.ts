import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

// import { HomeComponent }    from './component/home.component';
import { HomePromiseComponent }    from './component/home.component.promise';
import { AuthService }      from '../login/service/auth.service';

import { homeRouting } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    homeRouting 
  ],
  declarations: [
    // HomeComponent,
    HomePromiseComponent
  ],
  providers: [
    AuthService 
  ]
})
export class HomeModule {}