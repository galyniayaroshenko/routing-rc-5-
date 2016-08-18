import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { LoginComponent }    from './component/login.component';

import { AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';

import { loginRouting } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    loginRouting
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginModule {}