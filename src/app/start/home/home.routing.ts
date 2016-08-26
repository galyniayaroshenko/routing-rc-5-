export const authProviders = [];

import { Routes, RouterModule } from '@angular/router';

import { HomePromiseComponent } from './component/home.component.promise';
// import { LoggedInGuard }            from '../login/service/logged-in.guard';

const homeRoutes: Routes = [
  { path: 'home', component: HomePromiseComponent }
];

export const homeRouting = RouterModule.forChild(homeRoutes);