export const authProviders = [];

import { Routes, RouterModule } from '@angular/router';

import { SignupPromiseComponent } from './component/signup.component.promise';

const signupRoutes: Routes = [
  { path: 'signup', component: SignupPromiseComponent }
];

export const signupRouting = RouterModule.forChild(signupRoutes);