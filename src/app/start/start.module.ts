import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { StartComponent }    from './component/start.component';

import { startRouting } from './start.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    startRouting 
  ],
  declarations: [
    StartComponent
  ],
  providers: []
})
export class StartModule {}