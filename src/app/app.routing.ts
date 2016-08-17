import { RouterModule, Routes } from '@angular/router';

import { StartPage } from './startPage/startPage.component';
import { Login } from './login/login.component';
// import { Signup } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: StartPage },
  { path: 'startPage', component: StartPage },
  // { path: 'startPage/signup', component: Signup},
  { path: 'startPage/login', component: Login},
  { path: '**', component: StartPage }
];

export const routing = RouterModule.forRoot(routes);
