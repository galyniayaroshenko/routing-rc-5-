import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { startRouting } from './start.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    startRouting 
  ],
  declarations: [],
  providers: []
})
export class StartModule {}