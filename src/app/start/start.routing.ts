export const authProviders = [];

import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './component/start.component';

const startRoutes: Routes = [
  { path: 'start', component: StartComponent },
  { path: '', component: StartComponent },
  { path: '**', component: StartComponent }
];

export const startRouting = RouterModule.forChild(startRoutes);