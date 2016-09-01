export const authProviders = [];

import { Routes, RouterModule }   from '@angular/router';

import { SignupComponent } from './component/signup.component';

const signupRoutes: Routes = [
  { path: 'signup', component: SignupComponent }
];

export const signupRouting = RouterModule.forChild(signupRoutes);