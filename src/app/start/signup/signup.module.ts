import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupPromiseComponent }    from './component/signup.component.promise';

import { signupRouting } from './signup.routing';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    signupRouting 
  ],
  declarations: [
    SignupPromiseComponent
  ],
  providers: []
})
export class SignupModule {}