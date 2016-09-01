import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HomeComponent }    from './component/home.component';

import { homeRouting } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    homeRouting 
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
  ]
})
export class HomeModule {}