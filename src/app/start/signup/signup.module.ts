import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SignupComponent }    from './component/signup.component';

import { signupRouting } from './signup.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    signupRouting 
  ],
  declarations: [
    SignupComponent
  ],
  providers: []
})
export class SignupModule {}