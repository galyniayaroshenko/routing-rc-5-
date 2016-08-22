export const authProviders = [];

import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './component/start.component';
import { LoginComponent } from './login/component/login.component'



const startRoutes: Routes = [
  { path: 'start', component: StartComponent,
   children: [
      { path: 'login',  component: LoginComponent }
    ]
 },
  { path: '', component: StartComponent },
  { path: '**', component: StartComponent }
];

export const startRouting = RouterModule.forChild(startRoutes);